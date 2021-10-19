//to check if given string is palindrome or not
function isPalindrome(str){
  if(str.length === 1) return true; //if length is 1 
  if(str.length === 2) return str[0] === str[1]; //if string is only 2 characters, check if they are equal
  
   //if first and last letters are equal str.sice(-1) returns last character
   //str.slice(1,-1) remove first and last character and returns remaing string
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1)); 
 
  return false;
}

isPalindrome("madam")
