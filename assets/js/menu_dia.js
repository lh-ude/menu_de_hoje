function sorteio(){
const comida = ['Fast food','Massa','Asiática','Brasileira', 'Carne', 'Frutos do mar'];
const tipo_comida = ['gourmet','saudável','exótica','caseira','de um novo restaurante','temperada','com sobremesa'];

const resultado1 = Math.floor(Math.random(comida) * comida.length);
const resultado2 = Math.floor(Math.random(tipo_comida) * tipo_comida.length);

document.getElementById("resultadoFinal").innerHTML = (comida[resultado1]) + " " + (tipo_comida[resultado2]);
}