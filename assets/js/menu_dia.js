function sorteio(){
var comida = ['Fast food','Massa','Asiática','Brasileira','Natural','Temperada'];
var tipo_comida = ['gourmet','saudável','exótica','caseira','novidade','sem carne'];

var resultado = Math.floor(Math.random() * 6);

document.getElementById("resultadoFinal").innerHTML = (comida[resultado]) + " e " + (tipo_comida[resultado]);
}