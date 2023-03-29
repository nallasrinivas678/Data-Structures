const closestCarrot = (grid, startRow, startCol) => {
  // Idea is to use BFS to find shortest path
  
  const queue = [ [startRow, startCol, 0] ];
  const visited = new Set([ startRow + ',' + startCol ]);
  
  while(queue.length > 0){
    
    const [row, col, distance] = queue.shift();
    
    if(grid[row][col] === 'C') return distance;
    
    //to travers through four neighbors- up,down, left, right
    const deltas = [[1,0], [-1,0], [0,1], [0,-1]];
    for(let delta of deltas){
      const [rowDelta, colDelta] = delta;
      const neighborRow = row + rowDelta;
      const neigborCol = col + colDelta;
      
      const rowInbounds = 0 <= neighborRow && neighborRow < grid.length;
      const colInbounds = 0 <= neigborCol && neigborCol < grid[0].length;
      const pos = neighborRow +','+ neigborCol;
      
      if(
         rowInbounds && 
         colInbounds && 
         grid[neighborRow][neigborCol] !== 'X' &&
        !visited.has(pos)
        )
      {
        visited.add(pos);
        queue.push([neighborRow, neigborCol, distance + 1]);
      }
    }
  }
  return -1;
};

