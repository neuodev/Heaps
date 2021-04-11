console.log(heapify([5, 3, 8, 4, 1, 2]));

// last parent =  (n/2) -1
function heapify(array: number[]) {
  const lastParentIdx = array.length / 2 - 1;
  for (let i = lastParentIdx; i >= 0; i--) {
    bubbleDown(array, i);
  }
  return array;
}

function bubbleDown(array: number[], idx: number) {
  let largerIdx = idx;

  let leftIdx = idx * 2 + 1;
  if (leftIdx < array.length && array[leftIdx] > array[largerIdx]) {
    largerIdx = leftIdx;
  }

  let rightIdx = idx * 2 + 2;
  if (rightIdx < array.length && array[rightIdx] > array[largerIdx]) {
    largerIdx = rightIdx;
  }
  // base case -> if the larger idx is still the same that mean it's larger
  if (idx === largerIdx) return;
  swap(array, idx, largerIdx);

  bubbleDown(array, largerIdx);
}

function swap(array: number[], i: number, j: number) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
