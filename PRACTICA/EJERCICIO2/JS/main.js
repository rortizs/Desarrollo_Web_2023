function num() {
  return Math.ceil(3 * Math.random());
}

//Generar el numero y pedir al usuario que introduzca su suposicion
var num_generado = num();
var respuesta = prompt("Intente adivinar el numerl");

var color; //varaible que conteien el string de la clase que se asigna al div de respuesta
var string; //variable que contiene el mensaje que se imprime

//segun haya acertado o no, elegimos un calse y otra y ponemos el mensajje correspondiente
if (respuesta == num_generado) {
  color = "verder";
  mensaje = "Correcto, eres advino";
} else {
  color = "rojo";
  mensaje = "Incorrecto, el numero era " + num_generado;
}

//anadimos la clase correspondiente al elemento html cuyo id es "respuesta"
document.getElementById("respuesta").className = color;

//escribimos el mensaje
document.write(mensaje);
