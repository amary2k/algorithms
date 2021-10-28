export class Node {
    data:any;
    leftNode:Node;
    rightNode:Node;
    static level:number = 0;
    condition: Function;
    static maxDept: number = 0;

    constructor(data:any, leftNode:Node = null, rightNode: Node = null, condition: Function = null) 
    { 
        this.data = data; 
        this.leftNode = leftNode;
        this.rightNode = rightNode; 
        this.condition = condition;
    }

    public static insert(rootNode: Node, data) {
        if(typeof rootNode == undefined || rootNode == null)
            return;
        
        if(rootNode.leftNode == null) {
            rootNode.leftNode = new Node(data);
        } else if(rootNode.rightNode == null) {
            rootNode.rightNode = new Node(data);
        } else {
            this.insert(rootNode.leftNode , data);
        }
    }

    public static traverse(rootNode: Node, printFunction: Function) {
        this.level++;
        if(typeof rootNode == undefined || rootNode == null) {
            this.level--;
            return;
        }
        if(rootNode.leftNode != null) {
            this.traverse(rootNode.leftNode, printFunction);
        } 
        if(rootNode.rightNode != null) {
            this.traverse(rootNode.rightNode, printFunction);
        }
        printFunction(rootNode.data);
        this.level--;
    }

    public static treeDepth(rootNode: Node){

    }
}