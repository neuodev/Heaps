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
    this.swap(0, this.size - 1);
    this.array.pop();
    this.bubbleDown();
    console.log(this.array);
  }
  bubbleDown() {
    let idx = 0;
    let array = this.array;
    while (this.isValidParent(array, idx)) {
      if (array[idx] < this.rightChild(idx)) {
        this.swap(idx, this.rightChildIdx(idx));
        idx = this.rightChildIdx(idx);
      } else {
        this.swap(idx, this.leftChildIdx(idx));
        idx = this.leftChildIdx(idx);
      }
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

  isValidParent(array, idx) {
    return (
      array[idx] >= this.leftChild(idx) && array[idx] >= this.rightChild(idx)
    );
  }
}

const heap = new Heap();
heap.insert(20);
heap.insert(30);
heap.insert(50);
heap.insert(60);
heap.insert(70);
heap.remove();
console.log(heap.array);
