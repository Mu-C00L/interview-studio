final class MemoryFiles {
    private interface Node {}
    private static final class Dir implements Node {
        final java.util.Map<String,Node> children=new java.util.HashMap<>();
    }
    private record FileNode(String text) implements Node {}
    private final Dir root=new Dir();
    private String[] parts(String path) {
        if(path==null||!path.startsWith("/"))throw new IllegalArgumentException("absolute path required");
        String[] p=java.util.Arrays.stream(path.split("/")).filter(x->!x.isEmpty()).toArray(String[]::new);
        for(String x:p)if(x.equals(".")||x.equals(".."))throw new IllegalArgumentException("dot path");
        return p;
    }
    private Dir parent(String[] p) {
        Dir d=root;
        for(int i=0;i<p.length-1;i++){
            Node next=d.children.get(p[i]);
            if(!(next instanceof Dir))throw new IllegalStateException("missing/non-directory parent");
            d=(Dir)next;
        }
        return d;
    }
    void mkdir(String path) {
        String[] p=parts(path);Dir d=root;int i=0;
        for(;i<p.length;i++){
            Node next=d.children.get(p[i]);if(next==null)break;
            if(!(next instanceof Dir))throw new IllegalStateException("file in path");d=(Dir)next;
        }
        for(;i<p.length;i++){Dir next=new Dir();d.children.put(p[i],next);d=next;}
    }
    void write(String path,String text) {
        java.util.Objects.requireNonNull(text);String[] p=parts(path);
        if(p.length==0)throw new IllegalArgumentException("root is a directory");
        Dir d=parent(p);String name=p[p.length-1];
        if(d.children.get(name) instanceof Dir)throw new IllegalStateException("directory destination");
        d.children.put(name,new FileNode(text));
    }
    String read(String path) {
        String[] p=parts(path);if(p.length==0)throw new IllegalArgumentException("root is a directory");
        Node node=parent(p).children.get(p[p.length-1]);
        if(!(node instanceof FileNode))throw new IllegalStateException("missing/non-file");
        return ((FileNode)node).text();
    }
}
