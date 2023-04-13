class Queue {
  constructor() {

    this.array = [];
  }
  meter(persona) {
    if (persona > 59) {
        this.array.unshift(persona);}
        else{
            this.array.push(persona);}
  }
  sacar() {
    this.array.shift();
}
}
<<<<<<< HEAD
=======

let fila=new Queue ;

>>>>>>> 13a4a0cc16c82d449b469b7c176b60a0b90a7148
