//Exemplos de operadores de comparação

//Operador de igualdade ==
let a = 3;
let exIgualdade1 = a == 7;
let exIgualdade2 = a == 3;
let exIgualdade3 = a == "3";

console.log("a = 7? " + exIgualdade1 );
console.log("a = 3? " + exIgualdade2);
console.log("a = '3'?: " + exIgualdade3)

console.log("");

//Comparador de valor e tipo ===
let b = 5;

let exValorTipo1 = b === 5;
let exValorTipo2 = b === "5";

console.log("b = 5? " + exValorTipo1);
console.log("b = '5'?: " + exValorTipo2);

console.log("");

//Operador de negação para igualdade (não é igual) !=
let c = 6;

let exNaoIgual1 = c != 10;
let exNaoIgual2 = c != 6;
let exNaoIgual3 = c != "6";

console.log("c não é igual a 10?: " + exNaoIgual1);
console.log("c não é igual a 6?: " + exNaoIgual2);
console.log("c não é igual a '6'?: " + exNaoIgual3);

console.log("");

//Comparador de negação para igualdade de valor e tipo (Não é igual) !==
let d = 8;

let exNaoIgualValorTipo1 = d !== 8;
let exNaoValorTipo2 = d !== 1;
let exNaoIgualValorTipo3 = d !== "8";

console.log("d não é igual ao valor e ao tipo de 8?: " + exNaoIgualValorTipo1);

console.log("d não é igual ao valor e ao tipo de 1?: " + exNaoValorTipo2);

console.log("d não é igual ao valor e ao tipo de '8'?: " + exNaoIgualValorTipo3);

console.log("");

//Comparador maior que >
let e = 21;

let exMaiorQue1 = e > 98;
let exMaiorQue2 = e > 1;

console.log("e é maior que 98?: " + exMaiorQue1);

console.log("e é maior que 1?: " + exMaiorQue2);

console.log("");

// Comparador menor que <
let f = 48;

let exMenorQue1 = f < 18;
let exMenorQue2 = f < 100;
let exMenorque3 = f < 48;

console.log("f é menor que 18?: " + exMenorQue1);

console.log("f é menor que 100?: " + exMenorQue2);

console.log("f é menor que 48?: " + exMenorque3)

console.log("");

//Comparador maior ou igual >=
let g = 28;

let ex1MaiorIgual = g >= 19;
let ex2MaiorIgual = g >= 50;
let ex3MaiorIgual = g >= 28;

console.log("g é maior ou igual a 19?: " + ex1MaiorIgual);

console.log("g é maior ou igual a 50?: " + ex2MaiorIgual);

console.log("g é maior ou igual a 28?: " + ex3MaiorIgual);

console.log("");

// Comparador menor ou igual <=
let h = 54;

let ex1MenorIgual = h <= 100;
let ex2MenorIgual = h <= 20;
let ex3MenorIgual = h <= 54;

console.log("h é maior ou igual a  100?: " + ex1MenorIgual);

console.log("h é maior ou igual a 20?: " + ex2MenorIgual);

console.log("h é menor ou igual a")

console.log("");

//Comparador em instrução condicional
let idade = 59;
let aviso = "Você não pode dirigir";

if (idade > 18) aviso = "Você já pode dirigir!";

console.log(aviso);

