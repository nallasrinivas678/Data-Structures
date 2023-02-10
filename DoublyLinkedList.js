//Doubly Linked List and its operations
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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
    
}

var first = new Node(12);
first.next = new Node(13);
first.next.prev = first;
console.log(first);

