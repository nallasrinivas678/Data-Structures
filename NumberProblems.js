
//Notes: use modulo opertaor to get remainer.
//Reverse a number 123 - 321
function reverseNumber(num){
    var revNum = 0;
    var n = num;
    while(n != 0){
        rem = n % 10;
        revNum =  10 * revNum + rem;
        n = Math.floor(n/10);
    }
    return revNum;
}



function GCD(num1, num2){
    //Idea is to traverse from 1 to min(num1, num2)
    var gcd = 1;
    for(let i= 1; i <= Math.min(num1, num2); i++){
        if(num1 % i === 0 && num2 % i === 0 ){
            gcd = i;
        }
    }
    return gcd;
    
}

console.log(reverseNumber(12345));
