//en un supermercado chino, en paraguay. juan esta en la fila para pagar su pizza e ir a ver el partido del city contra el bayern
//juan se encuentra tercero en la fila,la cajera es muy veloz y cada 5 segundos termina de atender a un cliente,
//agrega a la fila  dos personas antes que a juan asi este se encuentre en la posicion 3   haz que cada vez que salga un cliente del super se pase por consola (el nombre del cliente,cada producto de su compra, ademas de que este mismo grite "el merjor supermercado chino del mundo") por  la atencion tan eficiente. muchas gracias por elegirnos att= super chinitos el paraguay ;) ...

//funcion creadora 
function Queue(){
    this.arry=[];
}
//metodo de clase Queue hacer fila
Queue.prototype.hacerFila = function(persona){
    this.arry.push(persona)
}
//metodo de clase Queue compra realizada
Queue.prototype.compraRealizada = function(){
    for (personas in this.arry){//por cada elemnto del array  realiza la ejecucion del codigo 

        let nombre=this.arry[0].nombre;//acceder a las propiedades del obj persona
        let productos=this.arry[0].productos;

    setInterval(() => {// cada 5 segundos el codigo sera ejecutado
        console.log("Ya pasaron 5 segundos "+ nombre +" ha finalizado su compra de"+ productos + " "+nombre +" grita: el MEJOR SUPERMERCADO CHINO DEL MUNDO" );
        this.arry.shift() //elimina el primer elemento del codigo respetando FIFO

      }, 5000);
}}
//funcion creadora de personas
function persona (nombre,productos){
    this.nombre=nombre;
    this.productos=productos.toString().split(",");
}
let fila=new Queue();
//creo las personas con el creador de objetos personas
let persona1= new persona("Erica","pan,jabon,leche,tomates1kg")
let persona2= new persona("Ricardo","cigarrillos,maquina de afeitar,leche tomates1kg")
let juan= new persona("Juan","pizza de microhondas, cerbeza, playera del man City")
//coloco las personas dentro de la fila
fila.hacerFila(persona1);
fila.hacerFila(persona2);
fila.hacerFila(juan);
//la fila comienza a avanzar
fila.compraRealizada();
