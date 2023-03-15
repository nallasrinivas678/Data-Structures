//Problem:
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

//leafList(a); // -> [ 'd', 'e', 'f' ] 

// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leafList = (root) => {
  // todo
  
  if(root === null) return [];
  
  let leafNodes = [];
  let stack = [root];
  
  while(stack.length > 0){
    
    let current = stack.pop();
    
    if(current.right === null && current.left === null){
      leafNodes.push(current.val);
    }
    
    //push right first and then left next, so that left will top of the stack for next iteration
    //to get order from left to right leaf nodes
    if(current.right !== null) stack.push(current.right);
    if(current.left !== null) stack.push(current.left);
    
    
    
  }
  console.log(leafNodes);  
  return leafNodes;
  
};

