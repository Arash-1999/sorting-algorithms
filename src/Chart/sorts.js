// file conatins different sorting algorithms

import { draw } from "./render";

// ********** ********** ********** //
// insertion sort
const insertionSort = async (arr, svg) => {
  for(let i = 1, len = arr.length; i < len; i++) {
    let key = arr[i],
      j = i - 1;

    while(arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
      draw(svg, arr);
      await new Promise(resolve => {setTimeout(resolve, 30)});
    };
    arr[j + 1] = key
  };
};

// ********** ********** ********** //
// bubble sort
const bubbleSort = async (arr, svg) => {
  for(let i = arr.length - 1; i >= 0; i--) {
    for(let j = 0; j < i; j++) {
      if(arr[i] < arr[j]) {
        let key = arr[j];
        arr[j] = arr[i];
        arr[i] = key;

        draw(svg, arr);
        await new Promise(resolve => {setTimeout(resolve, 30)});
      };
    };
  };
};

// ********** ********** ********** //
// merge sort
const merge = (arr, p, q, r) => {
  let n1 = q - p + 1,
    n2 = r - q,
    left = [],
    right = [];

  for(let i = 0; i < n1; i++) {
    left[i] = arr[p + i];
  };
  for(let j = 0; j < n2; j++) {
    right[j] = arr[q + j + 1];
  };
  left[n1] = Infinity;
  right[n2] = Infinity;

  let i = 0, j = 0;
  for(let x = p; x <= r; x++) {
    if(left[i] <= right[j]) {
      arr[x] = left[i];
      i++;
    }else if(right[j] < left[i]) {
      arr[x] = right[j];
      j++;
    };
  };
};

const mergeSort = async (arr, p, r, svg) => {
  if(r > p) {
    let mid = (r + p) >> 1;
    await mergeSort(arr, p, mid, svg);
    await mergeSort(arr, mid + 1, r, svg);
    await merge(arr, p, mid, r);
  };
  await draw(svg, arr);
  await new Promise(resolve => {setTimeout(resolve, 100)});
};

// ********** ********** ********** //
// heap sort
const maxHeapify = (arr, i) => {
  let left = 2 * (i + 1) - 1,
    right = 2 * (i + 1),
    largest;

  if(left < arr.heapSize && arr[i] < arr[left]) {
    largest = left;
  }else {
    largest = i;
  };  
  if(right < arr.heapSize && arr[largest] < arr[right]) {
    largest = right;
  };  

  if(largest !== i) {
    let key = arr[i];
    arr[i] = arr[largest];
    arr[largest] = key;
    maxHeapify(arr, largest);
  };  
};

const buildMaxHeap = (arr) => {
  for(let i = Math.floor(arr.length / 2); i >= 0; i--) {
    maxHeapify(arr, i); 
  };  
};

const heapSort = async (arr, svg) => {
  arr.heapSize = arr.length;
  buildMaxHeap(arr);
  draw(svg, arr);
  await new Promise(resolve => {setTimeout(resolve, 100)});

  for(let i = arr.length - 1; i > 0; i--) {
    let key = arr[0];
    arr[0] = arr[i];
    arr[i] = key;
    arr.heapSize--;
    draw(svg, arr);
    await new Promise(resolve => {setTimeout(resolve, 200)});
    maxHeapify(arr, 0);
    draw(svg, arr);
    await new Promise(resolve => {setTimeout(resolve, 200)});
  };
};

// ********** ********** ********** //
// quick sort
const partition = async (arr, p, r, svg) => {
  let key = arr[r],
    i = p - 1;

  for(let j = p; j < r; j++) {
    if(arr[j] <= key) {
      i++;
      let current = arr[j];
      arr[j] = arr[i];
      arr[i] = current;
      
      draw(svg, arr);
      await new Promise(resolve => {setTimeout(resolve, 100)});
    };
  };
  arr[r] = arr[i + 1];
  arr[i + 1] = key;

  return i + 1;
};

const quickSort = async (arr, p, r, svg) => {
  if(r > p) {
    let q = await partition(arr, p, r, svg);
    await quickSort(arr, p, q - 1, svg);
    await quickSort(arr, q + 1, r, svg);
  };
  draw(svg, arr);
  await new Promise(resolve => {setTimeout(resolve, 100)});
};

export { insertionSort, bubbleSort, mergeSort, heapSort, quickSort };
