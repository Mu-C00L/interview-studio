// Optional browser integration tests. Requires the playwright dev dependency.
const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const {spawn}=require('node:child_process');
const root=path.resolve(__dirname,'..');
const output=path.join(root,'.test-output');fs.mkdirSync(output,{recursive:true});
const port=process.env.TEST_PORT||'4178';
const base=`http://127.0.0.1:${port}/interview-studio/`;
const server=spawn(process.execPath,[path.join(root,'serve.cjs')],{env:{...process.env,PORT:port,BASE_PATH:'/interview-studio'},stdio:'pipe'});
let browser;
async function run(){
 await new Promise((resolve,reject)=>{server.stdout.once('data',resolve);server.once('error',reject);server.once('exit',code=>reject(new Error('Preview server exited '+code)));});
 browser=await chromium.launch({headless:true,...(process.env.BROWSER_EXECUTABLE?{executablePath:process.env.BROWSER_EXECUTABLE,args:['--no-sandbox','--disable-dev-shm-usage','--no-zygote','--single-process']}: {})});
 const context=await browser.newContext({viewport:{width:1440,height:1100},reducedMotion:'reduce'});
 const page=await context.newPage();const errors=[],failed=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push(r.url());});
 await page.goto(base);await page.waitForSelector('.track-card');
 assert.equal(await page.locator('.track-card').count(),4);
 await page.screenshot({path:path.join(output,'overview-desktop.png'),fullPage:true});
 const curriculum=await page.evaluate(()=>window.CURRICULUM);
 async function go(hash){await page.evaluate(h=>{location.hash=h},hash);await page.waitForFunction(h=>location.hash===h,hash);await page.waitForTimeout(30);}
 for(const l of curriculum){await go('#/lesson/'+l.id);await page.waitForSelector('#quiz-form');assert.equal(await page.locator('h1').textContent(),l.title);await page.locator('.figure-button img').evaluate(img=>img.decode());assert.equal(await page.locator('#walkthrough-content h3').textContent(),l.walkthrough[0][0]);assert.equal(await page.locator('#quiz-form fieldset').count(),5);assert.equal(await page.locator('.term-card').count(),3);assert.equal(await page.locator('[data-practice]').count(),3);assert.equal(await page.locator('#quiz-form input').count(),15);assert.equal(await page.locator('.term-card').count(),3);assert.equal(await page.locator('[data-practice]').count(),3);}
 console.log('PASS: all 140 lessons render with all 700 quiz questions.');
 await go('#/lesson/cpp-basics');await page.selectOption('#chapter-jump','binary-search');await page.waitForFunction(()=>location.hash==='#/lesson/binary-search');
 await page.click('#quiz-form button[type=submit]');assert.match(await page.locator('#quiz-error').textContent(),/all five/);
 const l=curriculum.find(l=>l.id==='binary-search');
 for(let i=0;i<5;i++)await page.check(`input[name=q${i}][value="${l.quiz[i].answer}"]`);
 await page.click('#quiz-form button[type=submit]');assert.match(await page.locator('.quiz-score').textContent(),/5 \/ 5/);
 await page.click('#retry-quiz');for(let i=0;i<5;i++)await page.check(`input[name=q${i}][value="${(l.quiz[i].answer+1)%3}"]`);
 await page.click('#quiz-form button[type=submit]');assert.match(await page.locator('.quiz-score').textContent(),/0 \/ 5/);assert.match(await page.locator('.quiz-score').textContent(),/Best score: 5\/5/);
 await page.locator('[data-practice="0"]').check();await page.locator('[data-practice]').first().check();await page.click('#complete-lesson');await page.click('#bookmark-lesson');await page.fill('#lesson-notes','Invariant: [lo, hi). <script>not HTML</script>');
 await page.reload();assert.match(await page.locator('#complete-lesson').textContent(),/Studied/);assert.equal(await page.locator('#bookmark-lesson').getAttribute('aria-pressed'),'true');assert.match(await page.locator('#lesson-notes').inputValue(),/<script>not HTML<\/script>/);assert.match(await page.locator('.quiz-score').textContent(),/0 \/ 5/);
 assert.equal(await page.locator('[data-practice="0"]').isChecked(),true);
 assert.equal(await page.locator('[data-practice]').first().isChecked(),true);
 console.log('PASS: incomplete quizzes, grading, retries, best/latest scores, notes, bookmarks, reload persistence.');
 await go('#/review');assert.equal(await page.locator('.lesson-row').count(),2);
 await go('#/track/dsa');assert.equal(await page.locator('.course-chapter').count(),13);await page.click('#collapse-chapters');assert.equal(await page.locator('.course-chapter[open]').count(),0);await page.click('#expand-chapters');assert.equal(await page.locator('.course-chapter[open]').count(),13);await page.fill('#topic-filter','Binary search on values');assert.equal(await page.locator('.lesson-row').count(),1);await page.selectOption('#progress-filter','todo');assert.equal(await page.locator('.lesson-row').count(),0);
 await page.click('#search-trigger');await page.fill('#search-input','booking');assert.ok(await page.locator('.search-result').count()>0);await page.keyboard.press('Escape');await page.waitForFunction(()=>!document.querySelector('#search-dialog').open);assert.equal(await page.locator('#search-dialog').evaluate(e=>e.open),false);
 await page.click('#theme-toggle');assert.equal(await page.locator('body').getAttribute('data-theme'),'dark');await page.reload();assert.equal(await page.locator('body').getAttribute('data-theme'),'dark');await page.click('#theme-toggle');
 await go('#/labs/growth');assert.equal(await page.locator('[data-growth="4"]').textContent(),'64');assert.equal(await page.locator('[data-growth="6"]').textContent(),'40320');await page.fill('#growth-n','0');await page.click('#growth-update');assert.match(await page.locator('#growth-error').textContent(),/whole number/);
 await go('#/labs/growth');assert.equal(await page.locator('[data-growth="4"]').textContent(),'64');assert.equal(await page.locator('[data-growth="6"]').textContent(),'40320');await page.fill('#growth-n','4');await page.click('#growth-update');assert.equal(await page.locator('[data-growth="4"]').textContent(),'16');await page.fill('#growth-n','0');await page.click('#growth-update');assert.match(await page.locator('#growth-error').textContent(),/whole number/);
 await go('#/labs/binary');while(await page.locator('#binary-step').isEnabled())await page.click('#binary-step');assert.match(await page.locator('#binary-status').textContent(),/insertion index 1/);
 await page.fill('#binary-target','99');await page.click('#binary-reset');while(await page.locator('#binary-step').isEnabled())await page.click('#binary-step');assert.match(await page.locator('#binary-status').textContent(),/insertion index 7/);
 await page.fill('#binary-values','');await page.click('#binary-reset');assert.match(await page.locator('#binary-status').textContent(),/insertion index 0/);
 await page.fill('#binary-values','4,2');await page.click('#binary-reset');assert.match(await page.locator('#binary-error').textContent(),/sorted/);
 await go('#/labs/lru');await page.click('#lru-demo');assert.match(await page.locator('#lru-status').textContent(),/evicted B/);assert.equal(await page.locator('#lru-array strong').allTextContents().then(a=>a.join(',')),'A,C');
 await page.fill('#lru-capacity','0');await page.click('#lru-reset');await page.click('#lru-put');assert.equal(await page.locator('#lru-array strong').count(),0);
 await go('#/labs/capacity');assert.match(await page.locator('#capacity-results').textContent(),/90 GB/);await page.fill('#cap-replicas','1');assert.match(await page.locator('#capacity-results').textContent(),/30 GB/);await page.fill('#cap-retention','-1');assert.match(await page.locator('#capacity-error').textContent(),/valid numbers/);

 await go('#/track/cs');await page.selectOption('#module-filter','OS processes and coordination');assert.equal(await page.locator('.lesson-row').count(),7);
 await go('#/lesson/os-memory');assert.equal(await page.locator('#step-prev').isDisabled(),true);await page.click('#step-next');assert.match(await page.locator('#step-count').textContent(),/Step 2 of 3/);await page.click('#step-next');assert.equal(await page.locator('#step-next').isDisabled(),true);await page.click('#step-prev');assert.match(await page.locator('#step-count').textContent(),/Step 2/);
 await page.click('#enlarge-visual');assert.equal(await page.locator('#visual-dialog').evaluate(e=>e.open),true);await page.click('#visual-zoom');assert.equal(await page.locator('#visual-zoom').getAttribute('aria-pressed'),'true');await page.keyboard.press('Escape');assert.equal(await page.locator('#visual-dialog').evaluate(e=>e.open),false);
 for(const id of ['sde1','sde2','senior','architect']){await go('#/roadmap/'+id);assert.equal(await page.locator('.role-card.selected').count(),1);assert.ok(await page.locator('.week').count()>=4);}
 await go('#/projects');assert.equal(await page.locator('.project-card').count(),4);await page.locator('[data-project="task-board"]').first().check();await page.reload();assert.equal(await page.locator('[data-project="task-board"]').first().isChecked(),true);
 await go('#/labs/scheduler');assert.match(await page.locator('#cpu-status').textContent(),/Average waiting = 6.67/);await page.selectOption('#cpu-policy','sjf');await page.click('#cpu-run');assert.match(await page.locator('#cpu-status').textContent(),/Average waiting = 2.67/);await page.selectOption('#cpu-policy','rr');await page.click('#cpu-run');assert.match(await page.locator('#cpu-status').textContent(),/Average response = 2.00/);assert.match(await page.locator('#cpu-status').textContent(),/Average waiting = 5.33/);await page.fill('#cpu-bursts','0');await page.click('#cpu-run');assert.match(await page.locator('#cpu-error').textContent(),/Enter/);
 await go('#/labs/paging');while(await page.locator('#page-step').isEnabled())await page.click('#page-step');assert.match(await page.locator('#page-status').textContent(),/6 faults/);await page.selectOption('#page-policy','lru');await page.click('#page-reset');while(await page.locator('#page-step').isEnabled())await page.click('#page-step');assert.match(await page.locator('#page-status').textContent(),/5 faults/);await page.fill('#page-refs','');await page.click('#page-reset');assert.equal(await page.locator('#page-step').isDisabled(),true);await page.fill('#page-frames','0');await page.click('#page-reset');assert.match(await page.locator('#page-error').textContent(),/1–6/);
 await go('#/labs/tcp');await page.click('#tcp-step');assert.equal(await page.locator('#tcp-output strong').count(),0);while(await page.locator('#tcp-step').isEnabled())await page.click('#tcp-step');assert.deepEqual(await page.locator('#tcp-output strong').allTextContents(),['CAT','HELLO','OK']);await page.fill('#tcp-chunk','12');await page.click('#tcp-reset');await page.click('#tcp-step');assert.equal(await page.locator('#tcp-output strong').count(),2);await page.click('#tcp-step');assert.equal(await page.locator('#tcp-output strong').count(),3);await page.fill('#tcp-messages','é');await page.click('#tcp-reset');assert.match(await page.locator('#tcp-error').textContent(),/ASCII/);
 console.log('PASS: search, module/status filters, themes, visual dialog, guided steps, all role paths, capstone persistence, and all seven labs.');

 await go('#/settings');const downloadPromise=page.waitForEvent('download');await page.click('#export-progress');const download=await downloadPromise;const backup=path.join(output,'progress.json');await download.saveAs(backup);const saved=JSON.parse(fs.readFileSync(backup,'utf8'));assert.ok(saved.completed.includes('binary-search'));assert.deepEqual(saved.practiceChecks['binary-search'],[0]);assert.deepEqual(saved.practiceChecks['binary-search'],[0]);
 page.once('dialog',d=>d.accept());await page.click('#reset-progress');assert.match(await page.locator('#total-progress').textContent(),/^0 \/ 140/);
 page.once('dialog',d=>d.accept());await page.setInputFiles('#import-file',backup);await page.waitForFunction(()=>document.querySelector('#import-result').textContent.includes('successfully'));assert.match(await page.locator('#total-progress').textContent(),/^1 \/ 140/);
 const invalid=path.join(output,'invalid.json');fs.writeFileSync(invalid,'{"version":999}');await page.setInputFiles('#import-file',invalid);await page.waitForFunction(()=>document.querySelector('#import-result').textContent.includes('Import failed'));assert.match(await page.locator('#total-progress').textContent(),/^1 \/ 140/);
 await go('#/lesson/segment-trees');await page.locator('.lesson-navigation a').last().click();await page.waitForFunction(()=>location.hash==='#/lesson/system-foundations');
 await page.reload();assert.match(await page.locator('h1').textContent(),/System design from zero/);
 await go('#/lesson/not-a-topic');assert.match(await page.locator('h1').textContent(),/not found/);
 console.log('PASS: backup export/import, invalid import preservation, cross-track navigation and subpath deep-link reload.');
 // Cross-tab updates must not trigger a lastLesson write ping-pong.
 await go('#/lesson/complexity');const second=await context.newPage();await second.goto(base+'#/lesson/arrays-hashing');await second.waitForSelector('#complete-lesson');await second.click('#complete-lesson');await page.waitForTimeout(300);assert.match(await page.locator('#total-progress').textContent(),/^2 \/ 140/);await second.close();
 await go('#/lesson/cpp-basics');await page.selectOption('#chapter-jump','big-o-growth');await page.waitForFunction(()=>location.hash==='#/lesson/big-o-growth');await page.screenshot({path:path.join(output,'growth-lesson.png'),fullPage:true});await go('#/track/dsa');await page.screenshot({path:path.join(output,'dsa-chapters.png'),fullPage:true});
 // Screenshot the primary lesson with a fresh quiz attempt for visual inspection.
 await go('#/lesson/binary-search');await page.click('#retry-quiz');await page.evaluate(()=>{window.scrollTo(0,0);document.querySelector('#toast').hidden=true;});await page.screenshot({path:path.join(output,'lesson-desktop.png'),fullPage:true});
 await page.setViewportSize({width:390,height:844});await go('#/home');await page.screenshot({path:path.join(output,'overview-mobile.png'),fullPage:true});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Home fits mobile width');
 await page.click('#menu-toggle');assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'),'true');await page.locator('#track-nav a').nth(2).click();await page.waitForFunction(()=>location.hash==='#/track/lld');assert.equal(await page.locator('#menu-toggle').getAttribute('aria-expanded'),'false');
 await go('#/lesson/booking');assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Lesson fits mobile width');await page.screenshot({path:path.join(output,'lesson-mobile.png'),fullPage:true});
 await page.setViewportSize({width:320,height:740});for(const hash of ['#/labs/growth','#/home','#/track/dsa','#/lesson/shortest-path','#/roadmap/architect','#/projects','#/labs/growth','#/labs/capacity','#/labs/scheduler','#/labs/paging','#/labs/tcp','#/lesson/os-memory','#/settings']){await go(hash);assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),hash+' fits 320px');}
 await page.setViewportSize({width:1440,height:1100});await go('#/lesson/os-memory');await page.screenshot({path:path.join(output,'cs-lesson-desktop.png'),fullPage:true});await go('#/roadmap/architect');await page.screenshot({path:path.join(output,'architect-path.png'),fullPage:true});
 assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
 console.log('PASS: mobile navigation/layout at 390px and 320px, cross-tab updates, no browser exceptions or failed assets.');
 await page.close();
 // Verify direct-file startup; no fetch/module server dependency.
 const local=await context.newPage();await local.goto('file://'+path.join(root,'index.html')+'#/lesson/complexity');await local.waitForSelector('#quiz-form');assert.match(await local.locator('h1').textContent(),/Complexity/);await local.close();
 const migrated=await context.newPage();await migrated.addInitScript(()=>{if(!sessionStorage.getItem('seeded')){localStorage.setItem('interview-studio-v1',JSON.stringify({version:1,completed:['complexity'],bookmarks:['complexity'],notes:{complexity:'Old notes survive'},quizzes:{complexity:{answers:[0,0,0],score:0,best:3,attempts:2}},theme:'light',lastLesson:'complexity'}));sessionStorage.setItem('seeded','yes');}});await migrated.goto(base+'#/lesson/complexity');await migrated.waitForSelector('#quiz-form');assert.match(await migrated.locator('.legacy-note').textContent(),/best 3\/3 saved/);assert.equal(await migrated.locator('#lesson-notes').inputValue(),'Old notes survive');assert.match(await migrated.locator('#complete-lesson').textContent(),/Studied/);assert.equal(await migrated.locator('#bookmark-lesson').getAttribute('aria-pressed'),'true');assert.equal(await migrated.locator('#quiz-form input:disabled').count(),0);await migrated.reload();assert.match(await migrated.locator('.legacy-note').textContent(),/best 3\/3 saved/);await migrated.close();console.log('PASS: edition-one progress migration preserves notes, bookmarks, studied lessons, and legacy scores without marking expanded quizzes complete.');
 const restricted=await context.newPage();await restricted.addInitScript(()=>{Object.defineProperty(window,'localStorage',{get(){throw new DOMException('Blocked','SecurityError')}});});await restricted.goto(base);await restricted.waitForSelector('.track-card');assert.equal(await restricted.locator('#storage-warning').isVisible(),true);await restricted.close();
 console.log('PASS: direct-file startup and graceful blocked-storage fallback.');
}
run().then(()=>console.log('ALL BROWSER CHECKS PASSED')).catch(e=>{console.error(e);process.exitCode=1;}).finally(async()=>{if(browser)await browser.close();server.kill();});
