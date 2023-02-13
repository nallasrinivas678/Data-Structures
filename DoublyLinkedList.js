//Doubly Linked List and its operations
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    //Big 0
    //Insertion - O(1)
     //Removal - O(1)
     //Searching - O(N)
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
   
        var newNode = new Node(val);

        //Check if length is zero, which means list is null, 
        //Add new node as head and tail
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
        
        
        
    }

    pop(){
        //remove tail

        //check is list is empty
        if(!this.head) return undefined;

        var poppedNode = this.tail;

        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;  //to remove links for previous nodes
            
        }
        this.length--;
        return poppedNode;
    }

    //remove first element in list and return returned element
    shift(){
        if(this.length === 0) return undefined;
        
        var oldHead = this.head;
        
     
        if(this.length === 1){
            this.head = null;
            this.tail = null;
           
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null
            oldHead.next = null;
        }

         this.length--;
         return node;
    }

    //Add element at the begining 
    unshift(val){

        var newNode = new Node(val);
        
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;
        return this;
        
    }

    get(index){

        //Optimization: If index length is less than half of list loop from head else loop from tail

        if(index < 0 || index >= this.length) return null;
        var count, current;
        if(index <= this.length/2){
            count = 0;
            current = this.head;
            while(count !== index){
                current = current.next;
                count++;
            }
        } else {
            count = this.length - 1;
            current = this.tail;
            while(count !== index){
                current = current.prev;
                count--;
            }
        }
        return current;
        
    }

    

    set(index,val){

        var node = this.get(index);
        if(node !== null){
             node.val = val;
             return true;
        }
        return false;
        
    }

    insert(index, val){
        //1.check if index is valid (index >0 && <= length || == length) 

        var newNode = new Node(val);
        
        if(index < 0 || index > this.length)
            return false;
        if(index === 0)
        {
            //use unshift - add at begining
            //Note: !! will return true or false instead of DLL
         return this.unshift(val);
        }

        if(index === this.length){
            return this.push(val);
         }
        
        var prevNode = this.get(index - 1);
        var nextNode = prevNode.next;

        prevNode.next = newNode,  newNode.prev = prevNode;
        newNode.next = nextNode,  nextNode.prev = newNode;
        this.length++;
        return true;
        
    }

    remove(index){

        if(index < 0 || index >= this.length)
            return false;

        if(index === 0){
           return this.shift();
        }

        if(index === this.length -1){
           return this.pop();
        }

        var foundNode = this.get(index);
        var prevNode = foundNode.prev;
        var nextNode = foundNode.next;

        prevNode.next = nextNode, nextNode.prev = prevNode;
        foundNode.next = null, foundNode.prev = null;  //This is to remove links for prev and next
        this.length--;
        return foundNode;
        
    }
    
}

var first = new Node(12);
first.next = new Node(13);
first.next.prev = first;
//console.log(first);
var list = new DoublyLinkedList();

list.push("srinivas");
list.push("nalla");
list.push("test");



//console.log(list.set(2, "demo"))

console.log(list.remove(1));

//console.log(list);

