// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const allTreePaths = (root) => {
  // use Recursion DFS
 
  //base case - 1
  if(root === null) return [];
  
  //If its leaf node, base case -2
  if(root.left === null && root.right === null){
    return [[root.val]];
  }
  
  //      a
//    /   \
//   b     c
//  / \     \
// d   e     f

  const allPaths = [];
  
  const leftSubPaths = allTreePaths(root.left);
  //[
  //[b,d],
  //[b,e]
  //]
  
  //To push parent element before the remaining elements
 for(let path of leftSubPaths){
   allPaths.push([root.val, ...path]);
 }
  
  const rightSubPaths = allTreePaths(root.right);
  
  //To push parent element before the remaining elements
   for(let path of rightSubPaths){
   allPaths.push([root.val, ...path]);
 }
  
  return allPaths;
  
};


//allTreePaths(a); // ->
// [ 
//   [ 'a', 'b', 'd' ], 
//   [ 'a', 'b', 'e' ], 
//   [ 'a', 'c', 'f' ] 
// ] 


