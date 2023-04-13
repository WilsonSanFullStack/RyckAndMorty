let y = 15;
class Queue {
  constructor() {

    this.array = [];
  }
  meter(y) {
    this.array.push(y);
    
  }
  sacar() {
    this.array.shift();
    
  }
mayor (y) {
  if (y > 59) {
    this.array.unshift(y);
  };
}
}
Queue()