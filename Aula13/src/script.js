//Exemplo paramêtro incorreto
function grausCelsius(fahrenheit) {
    return (5 / 9 * (fahrenheit - 32));
}

let resultado = grausCelsius(212);

console.log(resultado);

console.log("");

//Exemplo parametropadrão
function adicao(x, y = 5) {
    return x + y;
}

let soma = adicao(5);

console.log(soma);

//Exemplo retorno de função em expressão
function dividir(a, b ) {
    return a / b;
}

let total = dividir(10, 5) * 10;

console.log(total);

console.log("");

//Exemplo de retorno encerrando o bloco de código
function multiplicar(a , b) {
    return "Somente a dor coletiva gera união";

    return a * b;
}

let resultadoMultiplicar = multiplicar(4, 5);

console.log(resultadoMultiplicar);

console.log("");

//Exemplo de função sem return
function multiplicar2(a, b) {
    let resultado = a * b;

    return resultado;
}

let mult2Resultado = multiplicar2(40, 2);

console.log(mult2Resultado);

console.log("");


//Exemplo de return antecipado
function verificaIdade(idade) {

    let jovemDemaisMensagem = "Jovem demais";
    let maiorIdadeMensagem = "Você é maior de idade, acesso liberado";

    if(idade < 18) {
        return jovemDemaisMensagem;
    }

    return maiorIdadeMensagem;
}

let verificaIdadeResultado = verificaIdade(80);

console.log(verificaIdadeResultado);

console.log("");

//Exemplo de return no html
const h3Elemento = document.getElementById("ex1");

function saudacao() {
    let mensagemSaudacao = "OLá, SP05:";

    return mensagemSaudacao;
}

h3Elemento.innerHTML = saudacao();

console.log("");

//Exemplo de variáveis em argumentos
let valor1 = 10;
let valor2 = 33;

function somar(a, b) {
    return a + b;
}

let resultadoSoma = somar(valor1, valor2);

console.log(resultadoSoma);

console.log("");

//Exemplo de função com argumento padrão
function minhaFuncao(a, b) {

    if (b=== undefined){
        b = 10
    }

    return a * b;

}

let resultadoMinhaFuncao = minhaFuncao(10, 6);

console.log(resultadoMinhaFuncao)
