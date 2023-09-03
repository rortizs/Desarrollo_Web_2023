var respuesta = prompt("Cual es la capital de españa?");

// Uso de la funcion toLwerCase(), sirve para convertir la respuesta
// a minusculas y que haya problema al comparar con el string "madrid"
if (respuesta.toLowerCase() === "madrid") {
  document.write("Correcto, Madrid es la capital de España!");
}else{
  document.write('Su respuesta, \"' + respuesta + '\", no es correcta.');

}