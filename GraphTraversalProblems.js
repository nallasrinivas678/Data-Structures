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
