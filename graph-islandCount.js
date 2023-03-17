//Write a function, islandCount, that takes in a grid containing Ws and Ls. 
//W represents water and L represents land. 
//The function should return the number of islands on the grid. 
//An island is a vertically or horizontally connected region of land.

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'W', 'W', 'L', 'W'],
  ['W', 'W', 'L', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

//islandCount(grid); // -> 3

const islandCount = (grid) => {
  // todo
  let visited = new Set();
  let count = 0;
  
  for(let r=0; r < grid.length; r++){
    for(let c=0; c < grid[0].length; c++){
       if(explore(grid, r, c, visited) === true){
         count++;
       } 
    }
  }
  return count;
};

//Why use strings for set (becuase array acts as reference equality)
const explore = (grid, r, c, visited) => {
  
  //validate invalid positions
  const rowInBounds = 0 <= r && r < grid.length;
  const colInBounds =  0 <= c && c < grid.length;
  if(!rowInBounds || !colInBounds) return false;
  
  //traverse only for Land not water
  if(grid[r][c] === 'W') return false;
  
  //Check if position of row and column existis in visited set
  const pos = r + ','+ c;
  if(visited.has(pos)) return false;
  visited.add(pos);
  
  //DFS recursive
  explore(grid, r-1,c, visited);
  explore(grid, r+1, c, visited);
  explore(grid, r, c-1, visited);
  explore(grid, r, c+1, visited);
  
  
  return true;
  
}

