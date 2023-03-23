// Declaração de Função
function eco(texto) {
    console.log(texto)
};

eco("Bom dia pessoal");

function soma (valor1, valor2) {
    return valor1 + valor2
}

eco(soma(85,74));

// Expressao de função
// A função não tem um nome, ela está guardada em uma variável
// Chamado também de função anônima, pela auxência de nome
const somar = function(valor1, valor2) {
    return valor1 + valor2 
}

eco (somar(1,3))

console.log(apresentar())

function apresentar(){
    return "Olá, sou o Edi."
}

// Expressão de função vai dar erro de referência, porque a variavel apresente ainda não foi iniciada
// console.log(apresente())
// const apresente = function() {
//     return "Eai, dinei aqui."
// }


// Arrow Function
// const nome recebe parametro arrow bloco
const quadrado = x => x * x;
eco(quadrado(8));

function darBomDia(){
    console.log("Bom dia.")
}

darBomDia();