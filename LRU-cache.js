class Node{
    constructor(key,value, prev = null, next = null){
        this.key = key;
        this.value = value;
        this.prev = prev;
        this.next = next;
    }
}

class LRU {
    constructor(limit = 10){
        this.limit = limit;
        this.size = 0;
        this.cacheMap = {};
        this.head = null;
        this.tail = null;

        //In a Doubly Linked list make head as most recently used and tail as least recently used.

//Do every insertion at the head.
//On every read or update operation detach the node from its position and attach it at the head of the LinkedList. Remember, LRU is indicated in terms of both read and write operations to the cache.
//When cache limit exceeds remove a node from the tail
//Store key: Node relation in an object, so that retrieval is possible in O(1).


        //methods
        write(key, value){
            const existingNode = this.cacheMap[key];

            if(existingNode){
                this.detach(existingNode);
                this.size--;
            }
            else if(this.size === this.limit){
                delete this.cacheMap[this.tail.key];
                this.detach(this.tail);
                this.size--;
            }

            if(!this.head){
                this.head = this.tail = new Node(key, value)
            }
            else {
                  //write to head
            var oldHead = this.head;
            var newNode = new Node(key, value,this.head);
            this.head.prev = newNode;
            newNode.next = oldHead;
            this.head = newNode;
                
            }

             // update cacheMap with LinkedList key and Node reference
            this.cacheMap[key] = this.head;
            this.size++;
          
        }

        read(key){
            const existingNode = this.cacheMap[key];

            if(existingNode){
                const value = existingNode.value;

                // Make the node as new Head of LinkedList if not already
                if(this.head !== existingNode){
                     // write will automatically remove the node from it's position and make it a new head i.e most used
                    this.write(key, value);
                }

                return value;
                
            }
        }

        detach(node){
            //if given node is head
            if(node.prev === null){
                this.head = node.next;
            }
            else {
                //Skip the current node from sequence
                //set prev node to node.next to ignore given node from sequence
                node.prev.next = node.next;
            }

            //check if given node is tail
            if(node.next === null){
                this.tail = node.prev;
            }
            else {
                node.next.prev = node.prev;
            }
        }

        clear(){
            this.head = null;
            this.tail = null;
            this.size = 0;
            this.cacheMap = {};
            
        }
        
        
    }
}


const lruCache = new LRU(3);
lruCache.write('a', 123);
lruCache.write('b', 456);
lruCache.write('c', 789); // lru is 'a'
lruCache.read('a'); // lru is 'b'

// Now max limit 3 is reached. Let's add a new element
lruCache.write('d', 0); // lru 'b' is removed
console.log(lruCache);
