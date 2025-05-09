// on 26th August 2024 [12:06 PM ]
//function to perform bubble sort 

// a simple function to return the length of an iterable eg an ARRAY, STRING, e.t.c
function count(iterable){
    if(!isNaN(iterable)) iterable = `${iterable}`;
    let i =0;
    for(const item of iterable) i++;
    return i;
}

/* the bubble sort logic function*/

function bubbleSort(array){
    let iterations = sort(array), iterationsCount =[];
    while(iterations.swaps > 0){
        iterationsCount.push(iterations.swaps);
        iterations = sort(iterations.array);
    }
    return [iterations.array, `Nos. of swaps made per Iteration: ${iterationsCount}`, 
        `Total iterations(Sort Pass) made to sort the List: ${count(iterationsCount)}`, `List of ${count(array)} elements`];
  function sort (array){ 
    let len = count(array), c=0;
    for(let i=len; i>=0; i--){
        if(array[i]<array[i-1]){
            [array[i], array[i-1]] = [array[i-1], array[i]]; // swapping the items positions
            c++;
        }
    }
    return {swaps:c, array};
 }
}

//testing the function 
console.log(bubbleSort([22,3,44,5,6,8,7,10,9,15]));// normal list
console.log(bubbleSort([1,3,2,4,4,5,6,7,8,9])); // list with only one misplaced element
console.log(bubbleSort([13,12,11,9,8,7,6,5,3,2])); // a reverse-ordered list
console.log(bubbleSort([10,11,22,33,44,55,66,77,88,99])); // a sorted list
