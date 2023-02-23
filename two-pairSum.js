const pairSum = (numbers, targetSum) => {
 
  //idea is to use targetSum and it's complement numbers
  let previous = {};
  for(let i=0; i < numbers.length; i++){
    let comp = targetSum - numbers[i];
    
    //idea is if complement of number alreay exists in previous array
    //return than index along with current index
    //else add it to hashmap
    if(previous[comp] === null || previous[comp] === undefined){
      previous[numbers[i]] = i;
    }
    else return [previous[comp],i]
  }
};
