const { bubbleSort, selectionSort, quickSort, mergeSort } = require("./index");

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
    expect(getArray()).toEqual(getSortedArray());
  });
});

describe.skip("selectionSort", () => {
  test("Check if selectionSort is a function", () => {
    expect(typeof selectionSort).toEqual("function");
  });

  test("Sort Array using selection sort algorigthm", () => {
    expect(getArray()).toEqual(getSortedArray());
  });
});

describe.skip("quickSort", () => {
  test("Check if quickSort is a function", () => {
    expect(typeof quickSort).toEqual("function");
  });

  test("Sort Array using quick sort algorigthm", () => {
    expect(getArray()).toEqual(getSortedArray());
  });
});

describe.skip("mergeSort", () => {
  test("Check if mergeSort is a function", () => {
    expect(typeof mergeSort).toEqual("function");
  });

  test("Sort Array using merge sort algorigthm", () => {
    expect(getArray()).toEqual(getSortedArray());
  });
});
