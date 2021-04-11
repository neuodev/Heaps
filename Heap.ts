// left = parent * 2 + 1
// right = parent * 2 + 2
// parent = (idx -1 ) / 2

class Heap {
  array: number[];
  size: number;
  constructor() {
    this.array = [];
    this.size = 0;
  }

  insert(val) {
    this.array[this.size++] = val;
    this.bubbleUp();
  }

  remove() {
    if (this.isEmpty()) return null;
    this.swap(0, this.size - 1);
    let item = this.array.pop();
    this.bubbleDown();
    console.log(this.array);
    return item;
  }
  bubbleDown() {
    let idx = 0;
    let array = this.array;
    while (idx <= array.length && !this.isValidParent(array, idx)) {
      let largerChildIdx = this.largerChildIdx(idx);
      this.swap(idx, largerChildIdx);
      idx = largerChildIdx;
    }
  }

  bubbleUp() {
    let idx = this.size - 1;

    while (idx > 0 && this.array[idx] > this.array[this.parent(idx)]) {
      this.swap(idx, this.parent(idx));
      idx = this.parent(idx);
    }
  }

  parent(idx) {
    return Math.floor((idx - 1) / 2);
  }
  swap(i, j) {
    [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
  }

  leftChildIdx(idx) {
    return idx * 2 + 1;
  }
  rightChildIdx(idx) {
    return idx * 2 + 2;
  }
  leftChild(idx) {
    return this.array[this.leftChildIdx(idx)];
  }
  rightChild(idx) {
    return this.array[this.rightChildIdx(idx)];
  }
  hasLeftChild(idx) {
    return this.leftChildIdx(idx) <= this.array.length;
  }
  hasRightChild(idx) {
    return this.rightChildIdx(idx) <= this.array.length;
  }

  isValidParent(array, idx) {
    if (!this.hasLeftChild(idx)) {
      return true;
    }
    let isValid = array[idx] >= this.leftChild(idx);
    if (this.hasRightChild(idx)) {
      return (isValid = isValid && array[idx] >= this.rightChild(idx));
    }
    return isValid;
  }
  private largerChildIdx(idx) {
    if (!this.hasLeftChild(idx)) return idx;
    if (!this.hasRightChild(idx)) return this.leftChildIdx(idx);
    return this.leftChild(idx) > this.rightChild(idx)
      ? this.leftChildIdx(idx)
      : this.rightChildIdx(idx);
  }
  public isEmpty() {
    return this.array.length === 0;
  }
}

const heap = new Heap();
heap.insert(20);
heap.insert(30);
heap.insert(50);
heap.insert(60);
heap.insert(70);
// heap.remove()
console.log(heap.array);
