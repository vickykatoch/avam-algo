const { mergeSort, merge } = require("./merge");
module.exports = {
  bubbleSort: require("./bubble"),
  quickSort: require("./quick"),
  selectionSort: require("./selection"),
  merge,
  mergeSort
};
