const mostFrequentChar = (s) => {
  // todo
  let frequencyCtr = {};
  let mostFrequent = null;
  
  for(let char of s){
    frequencyCtr[char] = (frequencyCtr[char] || 0)+1;
  }
  
  for(let char of s){
   if(mostFrequent === null || 
      frequencyCtr[char] > frequencyCtr[mostFrequent]){
     mostFrequent = char;
   }
  }
  return mostFrequent;
};

console.log(mostFrequentChar('potato')); //o
