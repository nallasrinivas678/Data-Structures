  let array = [2,34,35,38,93,86,32,41,63,3,98,86,74,39,192,345,834,94];
    
    function LargestNumber(array){
        let max = null;
        for(let i=0;i<array.length;i++){
            if(max === null || max < array[i]){
                max = array[i];
            }
        }
        console.log("This is the largest number in array "+ max)


    }

    function MinNumber(array){
        let min = null;
        for(let i=0;i<array.length;i++){
            if(min === null || min > array[i]){
                min = array[i];
            }
        }
        console.log("This is the minimum number in array "+ min)


    }

    //using inbuilt sort function
    //sort function to sort numbers in asc order using (a,b)=>a-b
    //By default sort function in javacript sorts by alphabetical order
    let largestNumber = array.sort((a,b)=>a-b).pop();
    console.log("This is the largest number in array "+ largestNumber+" by using in built functions.")

    let minNumber = array.sort((a,b)=>b-a).pop();
    console.log("This is the min number in array "+ minNumber+" by using in built functions.")