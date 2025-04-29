class MaxHeap {
  constructor() {
    this.heap = [];
  }

  getParentIdex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    this.heapifyUp();
  }
  heapifyUp() {
    let index = this.heap.length - 1;
    while (index > 0 && this.heap[this.getParentIdex(index)] < this.heap[index]) {
      this.swap(index, this.getParentIdex(index));
      index = this.getParentIdex(index);
    }
  }

  remove() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    const max = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return max;
  }

  heapifyDown() {
    let index = 0;
    while (this.getLeftChildIndex(index) < this.heap.length) {
      let largerIndex = this.getLeftChildIndex(index);
      if (
        this.getRightChildIndex(index) < this.heap.length &&
        this.heap[largerIndex] < this.heap[this.getRightChildIndex(index)]
      ) {
        largerIndex = this.getRightChildIndex(index);
      }
      if (this.heap[index] > this.heap[largerIndex]) break;
      this.swap(largerIndex, index);
      index = largerIndex;
    }
  }
  kthLargest(k){
    console.log(this.heap.length)
    if(k>this.heap.length){
      return null
    }
    let res
    let duplicate=[...this.heap]
    for(let i=0;i<k;i++){
      res=this.remove()
      
    }
    return res
  }
  heapSort(){
    let sorted=[]
  
    while(this.heap.length>0){
      sorted.unshift(this.remove())
    }
    // this.heap=originalHeap
    return sorted
  }
  display() {
    console.log(this.heap);
  }
}

const heap = new MaxHeap();
heap.insert(1);
heap.insert(15);
heap.insert(5);
heap.insert(95);
heap.insert(9);
// heap.display()
// heap.remove();
// heap.remove();
heap.display();
let tempHeap=new MaxHeap()
tempHeap.heap=[...heap.heap]
console.log(tempHeap.heapSort())
// console.log("heapSOrted==>",heap.heapSort())
console.log("kth largest>>",heap.kthLargest(2))
heap.display();
