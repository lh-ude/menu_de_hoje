function sorteio(){
var comida = ['Fast food','Massa','Asiática','Brasileira','Natural','Frutos do mar'];
var tipo_comida = ['gourmet','saudável','exótica','caseira','novidade','temperada'];

var resultado1 = Math.floor(Math.random(comida) * 6);
var resultado2 = Math.floor(Math.random(tipo_comida) * 6);

document.getElementById("resultadoFinal").innerHTML = (comida[resultado1]) + " e " + (tipo_comida[resultado2]);
}