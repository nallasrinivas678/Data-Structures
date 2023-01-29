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


const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

depthFirstSearch(graph, 'a');

breadthFirstSearch(graph, 'a');
