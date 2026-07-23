//Exemplo de laço de repetição for
let frutas = ["banana", "maçã", "limão", "laranja"];
let frutasTamanho = frutas.length;

for (let contadora = 0; contadora < frutasTamanho; contadora++) {
    console.log("frutas" + (+contadora + 1)
+ " : " + frutas[contadora]); 
}