    //Basic concept for Merge sort is to divide and conquer array
    // then merge the result using recursive function.
    //divide the main array into two parts using middle index.
    //use the Merge recursive function and divide the array until it have only one item
    //one item means its sorted. Then use Merge function to Merge divided arrays.
    //Note: In recursion main function will pause until child recursions completed.
    //Time Complexity in worst scneario O(nlog n)


    //sample array for testing.
    let array = [34,2,36,8,92,1,3,82,35,95,86,73,28,30,211,194,127,248,271,22,371];

    function Merge(l,r,a){
        let llen = l.length;
        let rlen = r.length;
        let i=0,j=0,k=0;
        while(i<llen && j < rlen){
            if(l[i] <= r[j]){
                a[k] = l[i];
                k = k+1;
                i = i+1;
            }
            else{
                a[k] = r[j];
                k = k+1;
                j = j+1;
            }

        }

        while(i<llen){
            a[k] = l[i];
            k = k+1;
            i=i+1;
        }
        while(j<rlen){
            a[k] = r[j];
            k = k+1;
            j = j+1;
        }
      
            
    }

    function MergeSort(array){
        let len = array.length;
        if(len<2){
            return array;
        }
        else{
            let startIndex = 0;
            let endIndex = len - 1;
            let mid = Math.floor((startIndex+endIndex)/2);
            let leftArr = [],rightArr = [];
            for(let i=0;i<=mid;i++){
                leftArr.push(array[i]);
            }
            for(let j=len-1;j>mid;j--){
                rightArr.push(array[j]);
            }
            MergeSort(leftArr);
            MergeSort(rightArr);
            Merge(leftArr,rightArr,array);
        }
    }

MergeSort(array);
console.log("The sorted array using merge sort  "+array.toString());