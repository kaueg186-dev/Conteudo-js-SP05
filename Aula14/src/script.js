//Primeiro objeto em Javascript
const carro = {
    tipo: "Sedan",
    marca: "Volkswaven" ,
    modelo: "Voyage" ,
    cor: "Azul" ,
    ano: "2004" ,
}

console.log(carro);

console.log("");

//Exemplo de objeto vazio
const Pessoa = {};

Pessoa.nome = "Kauê";
Pessoa.idade = 18;
Pessoa.altura = 1.80;

console.log(Pessoa);

//Exemplo de Objeto com método
const pessoa2 = {
nome: "maria" ,
idade: 68 ,
saudacao: function() {
    return "Aooooooooooba! Bão?";
} ,   
};

console.log(pessoa2. saudacao);

console.log("");

//Exemplo de alteração em valor de propriedade em um Objeto

const pessoa3 = {
    nome: "Gomes" ,
    Idade: 20 ,
};

console.log(pessoa3);

pessoa3.idade = 19;

console.log(pessoa3);

