const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}

///////////////////////////////////////////////////////////
const tinyArray = getSizedArray(10);

Results for the tinyArray
insert 40 μs
append 182.3 μs

///////////////////////////////////////////////////////////
const smallArray = getSizedArray(100);

Results for the smallArray
insert 54.4 μs
append 190.4 μs

////////////////////////////////////////////////////////////
const mediumArray = getSizedArray(1000);

Results for the mediumArray
insert 224 μs
append 237.1 μs

/////////////////////////////////////////////////////////////
const largeArray = getSizedArray(10000);

Results for the largeArray
insert 11.1824 ms
append 697.6 μs

//////////////////////////////////////////////////////////////
const extraLargeArray = getSizedArray(100000);

Results for the extraLargeArray
insert 1.2361474000000001 s
append 3.3235 ms

// perf.start();                     // Starts timer
// doublerAppend(tinyArray);
// let resultsAppend = perf.stop();  // Stops timer and save time results


// // Try it with second function
// perf.start();
// doublerInsert(tinyArray);
// let resultsInsert = perf.stop();


// console.log('Results for the tinyArray');
// console.log("insert", resultsInsert.preciseWords);
// console.log("append", resultsAppend.preciseWords);
