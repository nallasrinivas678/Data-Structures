//Recursion in javascript
//iterative factorial function
function factorial(n){
    let total =1;
    for(let i=n;i > 1;i--){
        total *=i;
    }
    return total;
};


//factorial using recursion
function recursiveFactorial(n){
    if(n===1) return 1;
    else return n*recursiveFactorial(n-1);

}

//factorial(5);

//recursiveFactorial(5);
