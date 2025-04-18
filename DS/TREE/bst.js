class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root===null
    }

    insert(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.root=node
        }else{
            this.insertNode(this.root,node)
        }
    }
    insertNode(root,node){
        if(root.value<node.value){
            if(!root.right){
                root.right=node
            }else{
                this.insertNode(root.right,node)
            }
        }else{
            if(!root.left){
                root.left=node
            }else{
                this.insertNode(root.left,node)
            }
        }
    }
    min(root){
        if(!root.left)return root.value
        else return this.min(root.left)
    }
    max(root){
        if(!root.right)return root.value
        else return this.max(root.right)
    }
    preOrder(root){
        if(!root){
            return null
        }else{
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(!root){
            return null
        }else{
            this.inOrder(root.left)
            console.group(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(!root){
            return null
        }else{
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
}

let bst=new BinarySearchTree()
bst.insert(2)
bst.insert(6)
bst.insert(25)
bst.insert(1)
bst.insert(5)
bst.insert(50)
console.log("max>>",bst.max(bst.root))
bst.preOrder(bst.root)
console.log("---")
bst.inOrder(bst.root)
console.log("---")
bst.postOrder(bst.root)