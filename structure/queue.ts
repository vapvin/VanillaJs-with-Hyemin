class Queue<T> {
  data: T[] = [];

  get leng(){
    return this.data.length;
  }

  enqueue(item: T){
    this.data.push(item);
  }

  dequeue(){
    return this.data.shift();
  }
}

const queue = new Queue<number>();
queue.enqueue(0);
queue.enqueue(2);
queue.enqueue(4)
