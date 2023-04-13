//en un supermercado chino, en paraguay. juan esta en la fila para pagar 
//juan se encuentra tercero en la fila pero la cajera en muy veloz y cada 5 segundos termina de atender a un cliente
//agrega a la fila a juan en la posicion 3   haz que cada vez que salga un cliente del super grite "el merjor supermercado chino del mundo
<<<<<<< HEAD
function Queue(){
 this.personas=[];
}
Queue.prototype.nuevaP= function(persona){
 this.personas.push(persona)
}
Queue.prototype.finalizarCompra=function(){
  this.personas.shift()
=======
class Queue {
    constructor() {
        this.personas = [];
    }
    nuevaP(persona) {
        this.personas.push(persona);
    }
    finalizarCompra() {

        this.personas.shift();
    }
>>>>>>> c68ef12b2a562b7401719667df93bdac84b60f64
}
