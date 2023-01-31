//to check if given string is palindrome or not
function isPalindrome(str){
  if(str.length === 1) return true; //if length is 1 
  if(str.length === 2) return str[0] === str[1]; //if string is only 2 characters, check if they are equal
  
   //if first and last letters are equal str.sice(-1) returns last character
   //str.slice(1,-1) remove first and last character and returns remaing string
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1)); 
 
  return false;
}

function isPalindromeUsingLoop(str){
  if(str.length === 1) return str;

  if(str.length === 2) return str[0] === str[1];

  let len = str.length;
  
  for(let i = 0; i < len/2; i++){
    if(str[i] !== str[len -1 - i]) return false;
  }

  return true;
  
}


//Given a string, determine if it is a palindrome, considering only alphanumeric characters
//and ignoring cases.For example, "A man, a plan, a canal: Panama" is a palindrome.
const validPalindrome = (sentence) => {
    //idea is to start two pointers one from start and another from end

    let i =0;
    let j = sentence.length-1;

    while(i < j ){

        
        //If any of chars are not alphanumeric move to next letter
        if(!charCheck(sentence[i])) i++;
        if(!charCheck(sentence[j])) j--;

        //If left side and right side chars are not equal, return false; exit loop
        if( (charCheck(sentence[i]) && charCheck(sentence[j])) && sentence[i].toLowerCase() !== sentence[j].toLowerCase() )
        {
            return false;
        }
            
        
        //if letters are same and alphanumeric, move forward
        if(charCheck(sentence[i]) && charCheck(sentence[j]) 
          && (sentence[i].toLowerCase() ===  sentence[j].toLowerCase()))
        {
            i++;
            j--;
        }
    }

    return true;
    
}

//to check for alphanumeric
const charCheck = (input) => {

    var input_char = input.charCodeAt(0);

//Checking for alphabets
    if( (input_char >= 65 && input_char <= 90) ||
      (input_char >=97 && input_char <=122)
     )
    {
          return true;
    }
     
//check for numerics
   else if(input_char >=48 && input_char <=57)
     return true;
//no alphanumeric, return false
   else return false;
        
} 


//console.log(validPalindrome('A man, a plan, a canal: Panama'));

console.log(validPalindrome('Race a car'));

isPalindrome("madam")
