
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

function countDigitsInNumber(num){

    var counter = 0;
    var x = num;
    while(x !== 0){
        x = Math.floor(x/10);
        console.log(x);
        counter++
    }
    return counter;
    
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


function ArmstrongNumber(num){
    // 153 -> 1 power 3+ 5 power 3+ 3 power 3
    //count digits
    var sum = 0
    var originialNum = num;

    var count = countDigitsInNumber(num);

    while(num != 0){
        var digit = num % 10;
        sum += Math.pow(digit, count);
        num = Math.floor(num / 10);
    }
    
    return sum === originialNum;
}

console.log(reverseNumber(12345));
