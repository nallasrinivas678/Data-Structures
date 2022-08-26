function BubbleSort(arr){

    //We need two loops.
    //Outer loop will go through all elements
    for(i=arr.length;i>0;i--){
        var noSwaps = true;

        //this inner loop will do first pass
        for(j=0;j<i-1;j++){
            console.log(arr,arr[j],arr[j+1]);
            //swap
            if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            noSwaps = false;
           console.log("one pass completed")
            }
         
        }
        if(noSwaps) break;
    }

    return arr;
}

//Alternate sln
function bubbleSort(array) {
  
  let isSorted = false;
  let counter = 0; 
    //counter: always last value in the array is sorted, so to avoid comparing those values use counter and
    //stop the loop at the counter

  while(!isSorted){
    isSorted = true;
    for(let i =0; i < array.length-1-counter; i++){
      if(array[i] >= array[i+1]){
       array = swap(i, i+1, array);
        isSorted = false;
      }
    }
    counter++;
  }

  return array;
  
}

function swap(i,j, array){
 let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
  return array;
}


BubbleSort([8,1,2,3,4,5,6,7])
