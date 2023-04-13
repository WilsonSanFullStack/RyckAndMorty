//en un supermercado chino, en paraguay. juan esta en la fila para pagar 
//juan se encuentra tercero en la fila pero la cajera en muy veloz y cada 5 segundos termina de atender a un cliente
//agrega a la fila a juan en la posicion 3   haz que cada vez que salga un cliente del super grite "el merjor supermercado chino del mundo
function Queue(){
    this.personas=[];
}
Queue.prototype.nuevaP= function(persona){
    this.personas.push(persona)
}
Queue.prototype.finalizarCompra=function(){
    
    this.personas.shift()
}
new c