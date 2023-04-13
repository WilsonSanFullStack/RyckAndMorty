let y = 60;
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

let fila=new Queue ;

