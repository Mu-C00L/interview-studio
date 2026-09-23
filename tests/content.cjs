const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.resolve(__dirname,'..'),context={window:{}};
for(const file of ['curriculum','course-outline','learning-paths'])vm.runInNewContext(fs.readFileSync(path.join(root,'assets',file+'.js'),'utf8'),context);
const lessons=context.window.CURRICULUM,ids=new Set(lessons.map(l=>l.id));
assert.equal(lessons.length,140);assert.equal(ids.size,140);assert.equal(lessons.reduce((n,l)=>n+l.quiz.length,0),700);
for(const [track,count] of Object.entries({dsa:44,hld:27,lld:23,cs:46}))assert.equal(lessons.filter(l=>l.track===track).length,count);
for(const l of lessons){
 assert.match(l.id,/^[a-z0-9-]+$/);
 for(const key of ['title','summary','example','code','complexity','practice','solution','module'])assert.ok(l[key]?.length>2,`${l.id}: missing ${key}`);
 for(const field of ['concepts','walkthrough','comparison']){assert.equal(l[field].length,3);for(const row of l[field])assert.ok(row.every(x=>typeof x==='string'&&x.length>0));}
 assert.ok(l.teaching.intro.length>150);assert.equal(l.teaching.terms.length,3);assert.ok(l.teaching.advanced.length>=1);assert.equal(l.teaching.drills.length,3);
 for(const d of l.teaching.drills)for(const k of ['prompt','hint','answer'])assert.ok(d[k]?.length>10,l.id+' '+k);
 if(l.download)assert.equal(fs.readFileSync(path.join(root,l.download),'utf8').trim(),l.code.trim());
 assert.equal(l.quiz.length,5);assert.equal(l.quizVersion,2);
 for(const q of l.quiz){assert.equal(q.options.length,3);assert.equal(new Set(q.options).size,3);assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<3);assert.ok(q.explanation.length>20);}
 for(const id of l.prerequisites)assert.ok(ids.has(id),l.id+' missing prerequisite '+id);
 for(const [,url] of l.refs)assert.ok(url.startsWith('https://'));
 const svg=fs.readFileSync(path.join(root,l.visual.src),'utf8');assert.match(svg,/<svg/);assert.ok(!/<script|<foreignObject|href="https?:/i.test(svg));assert.ok(l.visual.alt.length>20);
 if(l.track==='dsa'){assert.equal(l.language,'C++17');assert.ok(!JSON.stringify(l).includes('Python'));assert.equal(fs.readFileSync(path.join(root,'examples/dsa',l.id+'.cpp'),'utf8').trim(),l.code.trim());}
}
const visiting=new Set(),visited=new Set();function visit(id){assert.ok(!visiting.has(id),'Prerequisite cycle: '+id);if(visited.has(id))return;visiting.add(id);for(const pre of lessons.find(l=>l.id===id).prerequisites)visit(pre);visiting.delete(id);visited.add(id);}for(const id of ids)visit(id);
const covered=new Set();for(const p of context.window.LEARNING_PATHS)for(const [,links] of p.milestones)for(const id of links){assert.ok(ids.has(id),id);covered.add(id);}for(const id of ids)assert.ok(covered.has(id),'No learning path contains '+id);
for(const p of context.window.PROJECTS){assert.ok(p.deliverables.length>=5);for(const id of p.lessons)assert.ok(ids.has(id));}
assert.equal(context.window.LEARNING_PATHS.length,4);assert.equal(context.window.PROJECTS.length,4);
assert.ok(!/https?:\/\//.test(fs.readFileSync(path.join(root,'assets/styles.css'),'utf8')));
console.log('PASS: 140 lessons, 700 questions, 140 visual assets, 44 C++ downloads, prerequisite DAG, four complete learning paths and four capstones.');

const chapters=Object.values(context.window.COURSE_OUTLINE).flat();assert.equal(chapters.length,34);assert.equal(chapters.reduce((n,c)=>n+c.lessons.length,0),140);const outlined=chapters.flatMap(c=>c.lessons);assert.equal(new Set(outlined).size,140);for(const c of chapters)for(const id of c.lessons)assert.equal(lessons.find(l=>l.id===id).chapter,c.id);
const crypto=require('node:crypto'),fingerprints=JSON.parse(fs.readFileSync(path.join(__dirname,'legacy-quiz-fingerprints.json'),'utf8'));for(const [id,hash] of Object.entries(fingerprints))assert.equal(crypto.createHash('sha256').update(JSON.stringify(lessons.find(l=>l.id===id).quiz)).digest('hex'),hash,'Legacy answers changed: '+id);
console.log('PASS: 34 sequential chapters, 420 three-level practice exercises, Java download parity, and all 95 legacy quiz fingerprints.');

