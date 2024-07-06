class queue {
  private container: number[] = [];
  enqueue(val: number) {
    this.container.push(val);
  }

  get elements() {
    return this.container;
  }

  dequeue() {
    this.container.shift();
  }
}
