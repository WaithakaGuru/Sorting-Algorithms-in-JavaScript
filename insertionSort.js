// On the evening of 26th August 2024
// creating an insertion Sort algorithm

// a function to get the length of an iterable eg ARRAY, STRING e.t.c
function count (iterable){
    if(!isNaN(iterable))iterable = `${iterable}`;
    let i= 0;
    for(const item of iterable) i++;
    return i;
}
// the Insertion sort logic
function insertionSort(array){
    let sorted= [], len = count(array), temp, swaps = 0, swapsCount= [], iterations = 0;
    sorted[0] = array[0];
    for(let i = 1; i<len; i++){
        for(let j = 0; j<count(sorted); j++){
            if(array[i]<sorted[j]){
                [array[i], sorted[j]] = [sorted[j], array[i]];
                swaps++;
            }
        }
        sorted.push(array[i]);
        swapsCount.push(swaps);
        iterations ++;
    }
    return[sorted, `No of swaps per iteration ${swapsCount}`, `No of iterations made to complete the sort ${iterations}`]
}

console.log(insertionSort([22,3,44,5,6,8,7,10,9,15]));// normal list
console.log(insertionSort([1,3,2,4,4,5,6,7,8,9])); // list with only one misplaced element
console.log(insertionSort([13,12,11,9,8,7,6,5,3,2])); // a reverse-ordered list
console.log(insertionSort([10,11,22,33,44,55,66,77,88,99])); // a sorted list