    //Basic concept for Merge sort is to divide and conquer array
    // then merge the result using recursive function.
    //divide the main array into two parts using middle index.
    //use the Merge recursive function and divide the array until it have only one item
    //one item means its sorted. Then use Merge function to Merge divided arrays.
    //Note: In recursion main function will pause until child recursions completed.
    //Time Complexity in worst scneario O(nlog n)


 function merge(arr1,arr2){
    let res = [];
    let i=0;
    let j=0;
    
    //compare elements from two arrays till its length and push it to result arrays
    //increment index of pushed array 
    while(i<arr1.length && arr2.length){
        if(arr1[i] < arr2[j]){
            res.push(arr1[i]);
            i++;
        }
        else {
            res.push(arr2[j]);
            j++;
        }
    }

    //if some elements are left in arr1, means if arr1 has more elements than arr2
    //push all elements to result array as remaining elements are already sorted
    while(i<arr1.length){
        res.push(arr1[i]);
        i++;
    }

     //if some elements are left in arr2, means if arr2 has more elements than arr1
    //push all elements to result array as remaining elements are already sorted
      while(j<arr2.length){
        res.push(arr2[j]);
        j++;
    }

    return res;

}


function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}

mergeSort([10,24,76,73]);
