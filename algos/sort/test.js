const {
  bubbleSort,
  selectionSort,
  quickSort,
  merge,
  mergeSort
} = require("./index");

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}
function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe("bubbleSorting", () => {
  test("Check if bubbleSort is a function", () => {
    expect(typeof bubbleSort).toEqual("function");
  });

  test("Sort Array using bubble sort algorigthm", () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});

describe("selectionSort", () => {
  test("Check if selectionSort is a function", () => {
    expect(typeof selectionSort).toEqual("function");
  });

  test("Sort Array using selection sort algorigthm", () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray());
  });
});

describe.skip("quickSort", () => {
  test("Check if quickSort is a function", () => {
    expect(typeof quickSort).toEqual("function");
  });

  test("Sort Array using quick sort algorigthm", () => {
    expect(quickSort(getArray())).toEqual(getSortedArray());
  });
});

describe("mergeSort", () => {
  test("Check if mergeSort is a function", () => {
    expect(typeof mergeSort).toEqual("function");
  });
  test("Check if merge is a function", () => {
    expect(typeof merge).toEqual("function");
  });

  test("Merge two arrays", () => {
    expect(merge([1,2],[3,4])).toEqual([1,2,3,4]);
  });
  test("Merge two arrays and sort them", () => {
    expect(merge([2,1],[4,3])).toEqual([2,1,4,3]);
  });

  test("Sort Array using merge sort algorigthm", () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
});
