//Check if array1 has squared elements in array2
//hint: use frequency counter pattern, loop through arrays and store frequency of numbers in different js objects


const checkIfArrayIsSquared = (arr1, arr2) => {

    if(arr1.length !== arr2.length) return false;

    let frequencyCountArr1 = {}; 
    let frequencyCountArr2 = {};

    for(let val of arr1){
        frequencyCountArr1[val] = (frequencyCountArr1[val] || 0) +1;
    }

    for(let val of arr2){
        frequencyCountArr2[val] = (frequencyCountArr2[val] || 0) +1;
    }

    console.log(frequencyCountArr1);
    console.log(frequencyCountArr2);
    
    for(let key in frequencyCountArr1){

         //check if key square from array1 is present in key as in array2 
        if(!(key ** 2 in frequencyCountArr2) ) return false;

         //check if value of item (frequency) of array1 matches with array2
        if( frequencyCountArr2[key ** 2] !== frequencyCountArr1[key] ) return false;
    }

    return true;
}


console.log(checkIfArrayIsSquared([1,2,3,4,2,6,5,9,6], [1,4,36,9,16,4,36,25,81]));
