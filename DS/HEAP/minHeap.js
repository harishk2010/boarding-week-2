class MinHeap {
  constructor() {
    this.heap = [];
  }
  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  getLeftChildIndex(i) {
    return i * 2 + 1;
  }

  getRightChildIndex(i) {
    return i * 2 + 2;
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
    while (
      index > 0 &&
      this.heap[index] < this.heap[this.getParentIndex(index)]
    ) {
      this.swap(index, this.getParentIndex(index));
      index = this.getParentIndex(index);
    }
  }

  remove() {
    if (this.heap.length == 0) return null;
    if (this.heap.length == 1) return this.heap.pop();
    let min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.heapifyDown();
    return min
  }
  heapifyDown(){
    let index=0
    while(this.getLeftChildIndex(index)<this.heap.length){
        let smallerIndex=this.getLeftChildIndex(index)
        if(this.heap[smallerIndex]>this.heap[this.getRightChildIndex(index)] && this.heap.length>this.getRightChildIndex(index)){
            smallerIndex=this.getRightChildIndex(index)
        }

        if(this.heap[index]<this.heap[smallerIndex])break
        this.swap(index,smallerIndex)
        index=smallerIndex
    }
  }
  display(){
    console.log(this.heap)
  }
}
const heap = new MinHeap();
heap.insert(1);
heap.insert(15);
heap.insert(5);
heap.insert(95);
heap.insert(9);
heap.display()
heap.remove();
// heap.remove();
heap.display();