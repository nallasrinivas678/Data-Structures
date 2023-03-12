class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;

    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(val){

        var newNode = new Node(val);
        //If there is no root, set value as root and return tree
        if(this.root === null) {
            this.root = newNode;
            return this;
            }
  
        else {
            //Traverse the tree
            var current = this.root;
            while(true){

                //To prevent duplicate value insertion
                if(val === current.value) return undefined;
                
                //Check letf side of the tree
                if(val < current.value){
                   if(current.left === null){
                    current.left = newNode;
                    return this;
                    }

                    //traverse to next
                    else{
                        current = current.left;
                    }    
               }

               //check right side of the tree
               else if(val > current.value){
                   if(current.right === null){
                       current.right = newNode;
                       return this;
                   }

                   //Traverse to next
                   else{
                       current = current.right;
                   }

               }
                
            }

        }
    }


    find(val){

        if(this.root === null) return false;
        
        var current = this.root;
        var found = false;

       while(current && !found){

           if(val > current.value){
               current = current.right;
           }

           else if(val < current.value){
                   current = current.left
               }

           else {
                found = true;
               }
            if(!found) return false;
             return true;
       }

    }

}

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

//tree.find(10)
//Comments
