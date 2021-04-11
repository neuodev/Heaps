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
}

const heap = new Heap();
heap.insert(20);
heap.insert(30);
heap.insert(50);
heap.insert(60);
heap.insert(70);
console.log(heap.array);
