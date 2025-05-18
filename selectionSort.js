//     --SELECTION SORT-

function count(iterable){
    if(!isNaN(iterable)) iterable = `${iterable}`;
    let i = 0;
    for(const item of iterable) i++;
    return i;
}

// selection sort logic
function selectionSort (list){
    let posOfLargest, len = count(list), checks = 0, iterations = 0, checksCount= [];
    for(let i = len-1; i>0; i--){
        posOfLargest = 0;
        for(let j = 0; j<=i; j++){
            if(list[j]>list[posOfLargest]) {
                posOfLargest = j; checks++;
            }
        }
        checksCount.push(checks);
        [list[i], list[posOfLargest]] = [list[posOfLargest], list[i]];
        iterations ++;
    }
    return [list, `No of checks done per iteration: ${checksCount}`, `No of iterations for complete sort ${iterations}`]
}
/**
 * Testing the Algo with a normal unordered, ordered, reverse ordered lists
 *      and a list with only one misplaced element
 */
console.log(selectionSort([1,3,2,4,5,6,7,8,9])); 
console.log(selectionSort([13,12,11,9,8,7,6,5,3,2])); 
console.log(selectionSort([10,11,22,33,44,55,66,77,88,99])); 
console.log(selectionSort([22,3,44,5,6,8,7,10,9,15]));