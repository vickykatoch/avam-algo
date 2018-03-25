'use strict';
/*
Wikipedia :
Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list to be sorted,
 compares each pair of adjacent items and swaps them if they are in the wrong order. The pass through the list is repeated until no swaps are needed, 
 which indicates that the list is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements "bubble" to the top of the list.
 Although the algorithm is simple, it is too slow and impractical for most problems even when compared to insertion sort.[2]
  It can be practical if the input is usually in sorted order but may occasionally have some out-of-order elements nearly in position.
*/

module.exports = dataArray => {
  for (let i = 0; i < dataArray.length; i++) {
    for (let j = 0; j < dataArray.length - i - 1; j++) {
      if (dataArray[j] > dataArray[j + 1]) {
        const temp = dataArray[j + 1];
        dataArray[j + 1] = dataArray[j];
        dataArray[j] = temp;
      }
    }
  }
  return dataArray;
};
