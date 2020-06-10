//to get number in particular place 
//Helper function
function getDigit(number,place){
        return Math.floor(Math.abs(number) / Math.pow(10,place)) % 10;
}

//Helper function
//to get number of digits in a number
function digitCount(num){
    if(num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)))+1;

}

//Helper function
//to return max digits from numbers, given an array
function mostDigits(arr){
    var maxDigits = 0;
    for(i=0;i<arr.length;i++){
        maxDigits = Math.max(maxDigits,digitCount(arr[i]));
    }
    return maxDigits;

}

//Time complexity O(nk)
//n- length of the array, k- number of digits 
function radixSort(nums){
    let maxDigitCount =  mostDigits(nums);
    for(let k=0;k<maxDigitCount;k++){
        //create 10 buckets with sub arrays
        //10 buckets because numbers are of base 10
        let digitBuckets = Array.from({length:10},()=>[]);

        for(let i=0;i<nums.length;i++){
            var digit = getDigit(nums[i],k);
            //push respective num in sub array
            digitBuckets[digit].push(nums[i]);
        }
        
        //after each loop assign numbers to nums array to sort it again until main loop ends
        //... is spread operator to concat sub arrays and merge as single array
        nums = [].concat(...digitBuckets);
        console.log(nums);

    }
    return nums;
}

//getDigit(47362,1);

//digitCount(47366867);

//mostDigits([1,23,89897,24,678876,98782744]);

//radixSort([23,14,56,876,234,110,98,76,8768,2322,90089,13879722]);

