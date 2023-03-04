// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const pathFinder = (root, target) => {
  const result = pathFinderHelper(root, target);
  
  if(result === null){
    return null;
  }
  
  //reverse the order to get order from root value
  else return result.reverse();
}

const pathFinderHelper = (root, target) => {
  // todo
  
  //empty root - return null
  if(root === null) return null;
  
  if(root.val === target) return [root.val];
  
  //pathFinderHelper either return null or array
  let leftPath = pathFinderHelper(root.left, target);
  let rightPath = pathFinderHelper(root.right, target);
  
  //if target ele found in left subtree
  if(leftPath !== null){
    leftPath.push(root.val);
    return leftPath;
  }
  
  //if target ele found in right subtree
   if(rightPath !== null){
    rightPath.push(root.val);
     return rightPath;
  }
  
  return null;
  
};

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

pathFinder(a, 'e'); // -> [ 'a', 'b', 'e' ]


