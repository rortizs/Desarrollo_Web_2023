//SCRIPT para calcular la superficie de una pared dada sus medidas


//variable para solicitar la altura de la pared
var altura = prompt("Introduzca la altura de la pared: ");

//variable para solicitar el ancho de la pared
var anchura = prompt("Introduzca la anchura de la pared: ");

//variable para calcular el area de la pared
document.write("La pared tiene una superficie de " + altura*anchura + " metros cuadrados");

//hace invisible el div ejerciciosJS, en el que se imprime el resultado.
window.onclick = function(){
  document.getElementById("ejerciciosJS").style.display = "none";
}