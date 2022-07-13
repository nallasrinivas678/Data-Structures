function reverse(str){
	if(str.length === 0) return '';
    return str.substring(str.length-1,str.length)+reverse(str.substring(0,str.length-1));
}

function reverseUsingLoop(str){
 if(str.length === 1) return str;
 let newStrng = '';
 for(let i=str.length -1 ; i >= 0; i--){
  newStrng += str[i];
 }
 return newStrng;
}

console.log(reverse("srinivas"));
console.log(reverseUsingLoop("srinivas"));
