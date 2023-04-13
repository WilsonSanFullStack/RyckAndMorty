let y = 60;
class Queue {
  constructor() {

    this.array = [];
  }
  //la funcion meter agrea personas a la fila
  meter(persona) {
    if (persona > 59) {  //compara si la persona es mayor  
        this.array.unshift(persona);}//si se cumple , agrega a la persona en primer lugar
        else{
            this.array.push(persona);}//si la funcion no se cumple agrega al ultimo lugar a la fila
    }
  sacar() {//el metodo sacar  elimina la primer persona de la fila respetando el "FIFO"
   this.array.shift();
}
}
//declaramos una fila usando la clase constructiura Queue
let fila=new Queue ;
let menor=10;
let mujer=26;
let hombre=42;
let anciano=70;

fila.meter(menor)
fila.meter(hombre)
fila.meter(menor)
fila.sacar()
fila.meter(mujer)
fila.meter(anciano)

console.log(fila)



