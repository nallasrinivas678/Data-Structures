//Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes (nodeA, nodeB).
//The function should return a boolean indicating whether or not there exists a path between nodeA and nodeB.
const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n']
];

//undirectedPath(edges, 'j', 'm'); // -> true

const buildGraph = (edges) => {
   const graph = {};

  for(let edge of edges){
    const [a,b] = edge;
    
     //Initialize new array key doesnt exists in graph
    if(!(a in graph)) graph[a] = [];

    if(!(b in graph)) graph[b] = [];
 //Its undirected graph, if path exists from a->b , then path exists from b->a
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const undirectedPath = (edges, src, dst) => {
   var graph = buildGraph(edges);
    let visited = new Set(); //To keep track of visted nodes, no duplicates
    let stack = [src];
    while(stack.length > 0){
        let current = stack.pop();
        visited.add(current);
        for(let neighbor of graph[current]){
            if(dst === neighbor) return true;
            if(!visited.has(neighbor)) stack.push(neighbor);
        }
    }
    return false;
};
