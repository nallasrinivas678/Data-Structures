function arrayFlatten(arr){

    if(arr.length === 0) return [];

    let res = [];

  //check if first element of an array is a sub array
  //if yes, set res with recursive function arrayFlatten,
  //else push it to result array
    Array.isArray(arr[0]) ?
           res = arrayFlatten(arr[0]):
           res.push(arr[0]);
    return res.concat(arrayFlatten(arr.slice(1)));

}

arrayFlatten([1,3, [4,5,6] ,[ 7, [8,9] , [10,11,12] ] ]);
