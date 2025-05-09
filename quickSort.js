// Now into Advanced sorting algorithms am going to code the 
//    quick sort Algorithm (it's a recursive one) On 28th August 2024 [ 10:47 PM ]
import { quickSort } from "./allSortAlogs";
// fn to calc the length of a list of items ie(no of items in a list)
function count(iterable){
    if(!isNaN(iterable)) iterable = `${iterable}`;
    let i = 0;
    for(const item of iterable) i++;
    return i;
}
function rangeCount(iterable, start, end){
    if(!isNaN(iterable)) iterable = `${iterable}`;
    let i = 0;
    for( j = start; j<=end; j++) i++;
    return i;
}
// quick sort logic
function quickSort(list=[], start =0 ,end= count(list) - 1){
    if(start < end){
        let pivotIndex = partition(list, start, end);
        quickSort(list, start, pivotIndex-1);
        quickSort(list, pivotIndex+1, end);
    }
    return list;
}
function partition(list, start, end){
    let pivot = list[end], i = start -1;
    for(let k = start; k<end; k++){
        if(list[k] < pivot){
            i++;
            [list[i], list[k]] = [list[k], list[i]];
        }
    }
    [list[i+1], list[end]] = [list[end],list[i+1]];
    return i+1;
}

// testing the function
console.log(quickSort([1,3,2,4,4,5,6,7,8,9])); // list with only one misplaced element
console.log(quickSort([13,12,11,9,8,7,6,5,3,2])); // a reverse-ordered list
console.log(quickSort([10,11,22,33,44,55,66,77,88,99])); // a sorted list
console.log(quickSort([22,3,44,5,6,8,7,10,9,15]));// normal list
