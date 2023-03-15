//Write a function, hasPath, that takes in an object representing the adjacency list of a directed acyclic graph and two nodes (src, dst). 
//The function should return a boolean indicating whether or not there exists a directed path between the source and destination nodes.

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

//hasPath(graph, 'f', 'k'); // true

const hasPath = (graph, src, dst) => {
  
  if(src === dst) return true;
  
  let stack = [src];
  
  while(stack.length > 0){
    let current = stack.pop();
    
    for(let neighbor of graph[current]){
      if(neighbor === dst) return true;
      stack.push(neighbor);
    }
    
  }
  
  return false;
  
  
};
