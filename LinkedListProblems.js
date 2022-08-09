class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val){
        var node = new Node(val);
        if(this.head == null){
            this.head = node;
            this.tail = this.head;
          
        }
        else {
          this.tail.next = node;
          this.tail = node;
        }
        this.length++;
        return this;
    }

    pop(){
        //if there are no elements return undefined
        if(!this.head){
            return undefined;
        }

       //we need to traverse through list till last but one element        
        var curr = this.head;
        var newTail = curr;
        while(curr.next){
            newTail = curr;
            curr = curr.next;
        }
        this.tail = newTail;
        this.tail.next = null
        this.length--;

        //if we have one element only then set head and tail as null
        if(this.length == 0){
            this.head = 0;
            this.tail = 0;
        }
        return curr;
    }

    //adding at the begining
    unshift(val){
        var newNode = new Node(val);
        //if list is empty, set tail and head as newNode
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }

        else {
        newNode.next = this.head;
        this.head = newNode;
        }
     

        this.length++;
        return this;
    }

    //remove from begining
    shift(){
        //if list is empty
        if(!this.head) return undefined;

        //remove head and set currentHead.netx  = new head
        var currentHead = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    //get value by index
    get(index){

        //if index out of range
        if(index < 0 || index >= this.length) {return undefined};
        
        var counter = 0;
        var current = this.head;
        
        //loop through list until index === counter, then return found value;
       while(counter !== index){
           current = current.next;
           counter++;
       }
        return current;
    }

    //to set value at given index
    //use get(index) method to find node at specific index
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode)
        {
            foundNode.val = val;
        return true;
        }
        return false;
    }


    //to insert given value at specific index
    insert(index, val){
        if(index < 0 || index >= this.length) return null;

        var newNode = new Node(val);
        
        //adding at begining
        if(index === 0) this.unshift(newNode);

        //adding at the end
        if(index === this.length) this.push(newNode);

        var counter = 0;
        var current = this.head;
        var temp = this.head;
        
        while(counter !== index){
            temp = current;
            current = current.next;
            counter++;
        }
      
        temp.next = newNode;
        newNode.next = current;
        this.length++;
        return this;
    }

    reverse(){

       var current = this.head, prev, next;
        this.head = this.tail;
        this.tail = current;
        while (current != null){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        return this;

    }

    print(){
        var arr = [];
        var node = this.head;
        while(node){
            arr.push(node.val);
            node = node.next;
        }
        console.log(arr);
    }

}

var list = new SinglyLinkedList();


list.push(5);
list.push(6);
list.push(7);
list.push(10);
list.push(12);

//list.insert(3,14)

const a = new Node('m');
const b = new Node('a');
const c = new Node('d');
const d = new Node('a');
const e = new Node('m');
const f = new Node('a');
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;


const x = new Node('x');
const y = new Node('y');
const z = new Node('z');

x.next = y;
y.next = z;


const sumItems = (head) => {
    let sum = 0;
    if(head === null) return 0;
    while(head !== null){
        sum+= head.val;
        head = head.next;
    }
    return sum;
}


const printItems = (head) => {
    let arr = [];
    while(head !== null){
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

const findItem = (head,item) => {
    if(head === null) return false;
    
    while(head !== null){
        if(head.val === item) return true;
        head = head.next;
    }
    return false;
}

const findItemAtIndex = (head, index) => {
    if(head === null) return;
    var counter = 0;
    var current = head;
    while(current !== null){
        if(counter === index) return current.val;
        current = current.next;
        counter++;
    }
    return null;
}

//reverse the list and return new head
const reverseLinkedList = (head) => {
    let current = head;
    let prev = null;
    while (current !== null){
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

//given 2 linked list, zip items from list1 and list 2
//idea is to set counter for both lists and take from list1 if counter is even,
//else take item from list 2 if counter is odd,
//once any list items end, append remaining items to tail of current zip list

const ZipperList = (head1, head2) => {
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let counter = 0;
    
    while(current1 !== null && current2 !== null){
        if(counter %2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        }
        else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        counter++;
    }

    if(current1 !== null) tail.next = current1;
    if(current2 !== null) tail.next = current2;
    
    return head1;
}


const isPalindromeLinkedList = (head) => {
//using two pointers , fast and slow
//idea is to when fast pointer hit end of linked list, start pointer will be at middle
//use reverse linked list helper function

    var fast = head;
    var slow = head;
    var fastPointer = head;
    var len = 0;

    while(fast.next !== null && fast.next.next !== null){
        fast = fast.next.next;
        slow = slow.next;
        len++;
    }

    let mid = reverseLinkedList(slow);
    
    while(len){
        len--;
        console.log(mid.val, fastPointer.val);
        if(mid.val !== fastPointer.val) return false;
        mid = mid.next;
        fastPointer = fastPointer.next;
    }

    return true;
    
}

//console.log(sumItems(a));
//console.log(printItems(a));
//console.log(findItem(a, 'g'));
//console.log(findItemAtIndex(a,3))
//console.log(printItems(reverseLinkedList(a)));
//console.log(printItems(ZipperList(a,x)));

console.log(isPalindromeLinkedList(a));




