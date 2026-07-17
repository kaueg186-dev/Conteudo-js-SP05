//Exemplos de if em estrutura condicional

let minhaIdade = 18;

if (minhaIdade > 17) {
    console.log("Eu sou maior de idade.")
}

console.log("");


//Exemplo de if aninhado
let idade = 18;
let país = "brasil";
let aviso = "Você não pode dirigir"

if (país == "brasil"); {
    if (idade >= 16) {
        aviso = "Você pode dirigir!"
    }
}

console.log(aviso);