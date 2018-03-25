"use strict";

/*
    Selection sort if a prove me wrong algo where each element is iterated to find the index with minimum value. Once inner loop is finished, minindex is compared against the index started with and values 
    get swapped if they're not equal.
    Faster than bubble sort as less swapping is required
*/

module.exports = dataArray => {
  for (let i = 0; i < dataArray.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < dataArray.length; j++) {
      if (dataArray[minIndex] > dataArray[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      const temp = dataArray[i];
      dataArray[i] = dataArray[minIndex];
      dataArray[minIndex] = temp;
    }
  }

  return dataArray;
};
