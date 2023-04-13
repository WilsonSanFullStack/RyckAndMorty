let y = 60;
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
new Queue()
console.log(new Queue())