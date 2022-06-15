//question: find sumZero given sorted array, considering not creating another object or array
//eg: [-4,-3,-1,0,1,2,4,6,9]   output => [-4,4] return first pair of sumZero, else return undefined.

//idea is consider two pointers starting on at left side and another one on right side (both ends)
//if sum of left and right element > 0 [-4,9] > 0, move backward right side pointer, else move forward left side pointer

const sumZero = (arr) => {

    let left = 0;
    let right = arr.length -1;

    while(left < right){

        if(arr[left] + arr[right] === 0) return [arr[left], arr[right]];

        else if(arr[left] + arr[right] > 0) {
            right--;
        }
        else {
            left++;
        }
    }
    return null;
    
}


//[-4,-3,-1,0,1,2,4,6,9]
//idea is to loop through array , with two for loops
//time complexity O(n^2)
const sumZeroNaiveSoltuion = (arr) => {

    for(let i =0; i< arr.length; i++){
        
        for(j=i+1; j< arr.length; j++){
            if(arr[i]+arr[j] === 0) return [arr[i], arr[j]];
            
        }
    }
}

//console.log(sumZeroNaiveSoltuion([-4,-3,-1,0,1,2,4,6,9]));

console.log(sumZero([-4,-3,-1,0,1,2,6,9,12]))
