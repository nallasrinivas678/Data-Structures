const intersection = (a, b) => {
  // using hashmap
  //let frequencyCtr = {};
  //let finalArr = [];
  
  //for(let item of a){
    //if(!(item in frequencyCtr))
      //{
		//frequencyCtr[item] = 0;
      //}
    //frequencyCtr[item] += 1;
  //}
  
  //for(let item of b){
      //if(!(item in frequencyCtr))
      //{
       // frequencyCtr[item] = 0;
      //}
    //frequencyCtr[item] += 1;
  //}
  
  //for(let item in frequencyCtr){
   //if(frequencyCtr[item] > 1){
      //finalArr.push(Number(item));
    //}
  //}
  
  //return finalArr;
  
  
  //using set
  const items = new Set();
  let result = [];
  
  //add a items to set
  for(let item of a){
    items.add(item);
  }
  
  for(let ele of b){
    if(items.has(ele)){
      result.push(ele);
    }
  }
  
  return result;
  
  
};
