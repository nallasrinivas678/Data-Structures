const pairProduct = (numbers, targetProduct) => {
  let previous = {};
  //use complement product logic , same as pairSum
  for(let i=0; i < numbers.length; i++){
    let comp = targetProduct / numbers[i];
    
    if(previous[comp] === null || previous[comp] === undefined){
      previous[numbers[i]] = i;
    }
    else return [previous[comp],i];
    
  }
};
