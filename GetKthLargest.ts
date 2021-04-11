import Heap from './Heap';

function getKthLargest(array: number[], k: number) {
  if (k < 1 || k > array.length) throw new Error('Illegal Argument');
  const heap = new Heap();
  for (let i = 0; i < array.length; i++) {
    heap.insert(array[i]);
  }

  for (let i = 0; i < k - 1; i++) {
    heap.remove();
  }
  if (heap.isEmpty()) return null;
  return heap.array[0];
}
