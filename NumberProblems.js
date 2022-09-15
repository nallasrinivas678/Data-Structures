
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

console.log(reverseNumber(12345));
