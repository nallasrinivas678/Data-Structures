const depthFirstSearch = (graph, sourceNode) => {
//use stack

    const stack = [sourceNode];

    while(stack.length > 0){
    let current = stack.pop();

    console.log(current);

    for(let neighbor of graph[current])
    {
        stack.push(neighbor);  
    }
        
    }
    
}

//Recurison DFS
const depthFirstSearchRecursive = (graph, source) => {
    console.log(source);
    //Base case - if any node has no elements in it, it wont go inside for loop
    for (let neighbor of graph[source]){
        depthFirstSearchRecursive(graph,neighbor);
    }
}

const breadthFirstSearch = (graph, sourceNode) => {
   //use Queue

    const queue = [sourceNode];

    while(queue.length > 0){
        const current = queue.shift();

        console.log(current);

        for(let neighbor of graph[current]){
            queue.push(neighbor);
        }
    }
}

const hasPathRecursvive = (graph, src, dest) => {

  if(src === dest ) return true;

  //idea is to navigate through neighbors 
  //and find out if any neighbor has path to dest
  //which means it has path from src also
  for(let neighbor of graph[src]){
  if(hasPath(graph, neighbor, dest) === true)
    return true;
  }

  //if we didnt find any path
  return false;
}

const hasPath = (graph, src, dst) => {
  //If source and des are same return true here
    if(src === dst) return true;

    const stack = [src];

    while(stack.length > 0){

        const current = stack.pop();

        for(let neighbor of graph[current]){
            stack.push(neighbor);
            if(neighbor === dst) return true;
        }
        
    }

    return false;
}


//Problem: Given edges array , find if there any path exists b/w nodeA and nodeB
const undirectedPath = (edges, nodeA, nodeB) => {
 //convert given edges array to graph structure for easy traversal
 const graph = buildGraph(edges);

  return hasPath(graph, nodeA, nodeB, new Set());
};

const hasPath = (graph, src, dst, visited) => {
 if(src === dst) return true;

    //use Set data structure to prevent traversing visted nodes
  if(visited.has(src)) return false;

  visited.add(src);

  for(let neighbor of graph[src]){

    if(hasPath(graph, neighbor, dst, visited) === true)
      return true;
  }
  
  return false;
  
  
}

const buildGraph = (edges) => {
   const graph = {};

  for(let edge of edges){
    const [a,b] = edge;
      
      //If a doesnt exist in graph create it as empty array
    if(!(a in graph)) graph[a] = [];

    if(!(b in graph)) graph[b] = [];

      //push b for a and vice versa as its undirected path
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

   
  

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

//acyclic graph - for hasPath
const graph2 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

depthFirstSearch(graph, 'a');

breadthFirstSearch(graph, 'a');
