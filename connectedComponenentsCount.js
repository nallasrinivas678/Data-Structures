//Write a function, connectedComponentsCount,
//that takes in the adjacency list of an undirected graph.
//The function should return the number of connected components within the graph.

//problem:
connectedComponentsCount({
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2]
}); // -> 2


const connectedComponentsCount = (graph) => {
  const visited = new Set();
  let count = 0;
  //loop through each key in graph (note for -in loop)
  for(let node in graph){
    if(!visited.has(String(node))){
      visited.add(String(node));
      count++;
    }
    
    //DFS - iterative version
    let stack = [node];
    while(stack.length > 0){
      let current = stack.pop();
      
      //Add visited node 
      visited.add(String(current));
      for(let neighbor of graph[current]){
        
        //push only un-visited node
        if(!visited.has(String(neighbor)))
          stack.push(neighbor);
      }
    }
  }  
  return count;
}


