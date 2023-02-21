const isPrime = (n) => {
  //Prime number - divided by 1 and itself
  //consider range of numbers (factors) divisible by numbers
  //Use optimization - consider range till sqrt of numbers
  
  //example 1 is not prime and negative numbers
  if(n < 2) return false;
  
  for(let i=2; i <= Math.sqrt(n);i++){
    if(n % i === 0) return false;
  }
  return true;
};

//Time complexity O(suareroot(1))
//Space complexity O(1)
