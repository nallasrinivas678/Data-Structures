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


BubbleSort([8,1,2,3,4,5,6,7])
