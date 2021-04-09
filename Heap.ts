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
  }
}

const heap = new Heap();
heap.insert(20);
heap.insert(30);
heap.insert(40);
heap.insert(50);
heap.insert(60);
console.log(heap.array);
