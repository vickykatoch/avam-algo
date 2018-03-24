

function merge(left, right) {
    const result =[];
    while(left.length && right.length) {
        if(left[0]<right[0]) {
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    console.log('DK', result);
    return [...result,...left,...right];
}
module.exports = {
    merge : merge
}

// const arr = [10, 5, -3, 4, 7, 2, 25, 70];


// function selectionSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let minIdx = i;
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[j] < arr[minIdx]) {
//                 minIdx = j;
//             }
//         }
//         if (minIdx !== i) {
//             const temp = arr[i];
//             arr[i] = arr[minIdx];
//             arr[minIdx] = temp;
//         }
//     }
//     return arr;
// }

// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < (arr.length - i - 1); j++) {
//             if (arr[i] < arr[j]) {
//                 const temp = arr[i];
//                 arr[i] = arr[j];
//                 arr[j] = temp;
//             }
//         }
//     }
//     return arr;
// }

// function main() {
//     console.log('Unsorted : ', arr);
//     const sorted = selectionSort(arr);
//     console.log('Selection Sorted : ', sorted);
//     const bsorted = bubbleSort(arr);
//     console.log('Bubble Sorted : ', bsorted);
// }
// main();