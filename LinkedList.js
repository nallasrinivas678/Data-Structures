
    class Node{
        constructor(element){
            this.element = element;
            this.next = null;
        }
    }

    class LinkedList{
        constructor(){
            this.head = null;
            this.size = 0;
        }

        //functions to implement
        //add(element)

        add(element)
        {
            let node = new Node(element); //creates new node
            let current; //to store current node
            //if this list is empty add the element & make it head
            if(this.head === null)
            {
                this.head = node;
            }
            else 
            {
                current = this.head;
                    //iterate through end of list
                    while(current.next){
                        current = current.next;
                    }

                         // add node
                        current.next = node;
            }
            this.size++;
        }

            //In the order to add an element at the end of the list we consider the following :
            // If the list is empty then add an element and it will be head
            // If the list is not empty then iterate to the end of the list and add an element at the end of the list
            // current is used to iterate through the list after every iteration we update it to be the next of the current node. If next is null(the last element of a list contains null in the next) then we add the element to the list.
        insertAt(element,index)
        {
            if( index > 0 && index > this.size)
            {
                return false;
            }
            else
             {
                //create a new node
                var node = new Node(element);
                var curr, prev;
                curr = this.head;

                //if index=0 add at first index
                if(index === 0)
                {
                    node.next = head;
                    this.head = node;
                }

                else
                {
                    curr = this.head;
                    var it =0;
                    //iterate over the list to find the postion to insert
                    while(it < index)
                    {
                        it++;
                        prev = curr;
                        curr = curr.next;
                    }

                    //add an element
                    node.next = curr;
                    prev.next = node;
                }
                this.size++;
             }
        }

            // In order to remove an element from the list we consider three condition:
            // If the index is 0 then we remove head and make next node head of the list
            // if the index is size – 1 then we remove the last element form the list and make prev the last element
            // if its in between 0 to size – 1 we remove the element by using prev and current node
        removeFrom(index)
        {
            
            if(index > 0 && index > this.size)
            {
                return -1;
            }
            else
            {
                let curr,prev,it=0;
                curr = this.head;
                prev = curr;//prev = null
                if(index === 0 )
                {
                    this.head = curr.next;
                }
                else
                {
                    //iterate over the list to the position to remove an element.
                    while(it<index)
                    {
                        it++;
                        prev = curr;
                        curr = curr.next;
                    }

                    //remove the element
                    prev.next = curr.next;
                }
                this.size--;
                return curr.element;
            }
            
        }

        removeElement(element)
        {
            let curr = this.head;
            let prev = null;
            while(curr !== null)
            {
                
                if(curr.element === element)
                {
                    //if element is first one in list, there will no previous item
                    if(prev === null)
                    {
                        this.head = curr.next;
                    }
                    else
                    {
                        prev.next = curr.next;
                    }
                    this.size--;
                    return element;
                }
                prev = curr;
                curr = curr.next;
            }
            return -1;
        }

        indexOf(element)
        {
            let curr = this.head;
            let count = 0;
            while(curr != null)
            {
                if(curr.element === element)
                {
                    return count;
                    count++;
                    curr = curr.next;
                }
            }

            //not found
            return -1;
        }

        printList()
        {
            let curr = this.head
            let str = "";
            while(curr)
            {
                str += curr.element+" , ";
                curr = curr.next;
            }
            return str;
        }
            
    }


