  //let arr = [7,2,1,6,8,5,3,4];
    let arr = [34,2,36,8,92,1,3,82,35,95,86,73,28,30,211,194,127,248,271,22,371];

    function Partition(arr,startIndex,endIndex)
    {
        let pivot = arr[endIndex];
        let p_Index = startIndex;
        for(startIndex;startIndex<=endIndex-1;startIndex++)
        {
            if(arr[startIndex] <= pivot)
            {
                let temp = arr[startIndex];
                arr[startIndex] =  arr[p_Index];
                arr[p_Index] = temp;
                p_Index = p_Index+1;
            }
        }
        let tempItem = arr[p_Index];
        arr[p_Index] = arr[endIndex];
        arr[endIndex] = tempItem;
        return p_Index;
    }

    function QuickSort(arr,startIndex,endIndex)
    {   
        if(startIndex < endIndex)
        {
            let p_Index = Partition(arr,startIndex,endIndex);
            QuickSort(arr,startIndex,p_Index-1);
            QuickSort(arr,p_Index+1,endIndex);
        }
       

    }

    QuickSort(arr,0,arr.length-1);
    console.log("The sorted array by using quick sort   "+arr.toString());
