"use strict";
/*
input : [100, -40, 500, -124, 0, 21, 7]
split : [100, -40, 500] [-124, 0, 21, 7]
split : [100] [-40,500] [-124,0] [21,7]
split : [100] [-40] [500] [-124] [0] [21] [7]
merge : [-40,100] [-124,500] [0,21] [7]

*/
const merge = (left, right) => {
  const merged = [];
  while (left.length && right.length) {
    if (left[0] > right[0]) {
      merged.push(right.shift());
    } else {
      merged.push(left.shift());
    }
  }
  return [...merged, ...left, ...right];
};

const mergeSort = dataArray => {
  if (dataArray.length === 1) {
    return dataArray;
  }
  const center = Math.floor(dataArray.length / 2);
  const left = dataArray.slice(0, center);
  const right = dataArray.slice(center); 
  return merge(mergeSort(left), mergeSort(right));
};

module.exports = {
  merge,
  mergeSort
};
