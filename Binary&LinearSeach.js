//let array = [2,4,9,13,17,22,34,87,89,101,118,123,128,132,147,220,234,237,241,267]
//let target = 147;
function BinarySearch(array,target){
    let startIndex = 0;
    let endIndex = array.length - 1;
            while(startIndex<=endIndex)
            {
            let middle = Math.floor((startIndex+endIndex)/2);

            if(target === array[middle])
            {
               return console.log("Target element found at index "+ middle)
            }

            if(target > array[middle])
            {
                console.log("binary search on right side");
                startIndex = middle+1;
                
            }
            
            if(target < array[middle])
            {
                console.log("binary search on left side");
                endIndex = middle-1;
                
            }
            else 
            {
            console.log("Not Found this loop iteration. Looping another iteration.");
            }
        }

            console.log("Taget not found");

}

//BinarySearch(array, 87);

function LinearSearch(array,targetElement)
{
    for(let i=0;i<array.length;i++){
        if(targetElement === array[i]){
            return console.log("Target element found at Index "+ i)
        }
    }
    return console.log("Element not found");

}

//LinearSearch(array,87)