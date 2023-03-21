// Type Number
const meuNumero = 3;
const primeiroNumero = 1;
const segundoNumero = 2;
// Somar constantes
const operacaoMatematica = primeiroNumero - segundoNumero;
console.log(operacaoMatematica);

// ponto flutuante
const numeroPontoFlutuante = 3.3;
const pontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;
console.log(novaOperacao);

//NaN -> Not a Number
const alura = "alura";
console.log(alura * primeiroNumero);

// Type String
const texto1 = "Olá, mundo!";
const texto2 = "Uma cadeia de caracteres";
const stringNumeros = "345163";
const citacao = 'Lá se vem a borboleta, já completa sua beleza. Pobrezinha borboleta, chora, o tempo de lagarta, pra sonhar ser borboleta. "Martins, Yago"';
const livroNome = "Poesias de um Calvo";
console.log(citacao);

// concatenação (+)
console.log(citacao + " " + livroNome);

// Unicode
const cifrao = "\u0024";
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao + ' ' + aMaiusculo + ' ' + tique + ' ' + hiragana)

// Template String
// Permite a interpolação de variáveis
const nome = "João";
const idade = 30;
const mensagem = `Meu nome é ${nome} e eu tenho ${idade} anos.`
console.log(mensagem);


// Permite realizar operações
const valor1 = 10;
const valor2 = 23;
const resultado = `A soma de ${valor1} e ${valor2} é igual a ${valor1 + valor2}.`;
console.log(resultado);

// Permite usar múltiplas linhas
const mensagemLonga = `
  Olá,

  Eu espero que você esteja bem.

  Obrigado por usar o nosso serviço.

  Atenciosamente,
  A equipe.
`;
console.log(mensagemLonga);

//Booleano
console.log(primeiroNumero === segundoNumero);
const terceiroNumero = 8;
const quartoNumero = 8;
console.log(terceiroNumero === quartoNumero);
//Booleano é verdadeiro ou falso. 0 ou 1. Sim ou não.

const teste = nome + alura;
console.log(teste);


// Null
// Null é um tipo especial, que pode ser definido como "Ausencia de Valor" e pode ser atribuido como valor de uma variável. Fica mais fácil de compreender se você ler Null como "Valor Ausente".
const vacuo = null;
console.log(vacuo);
// É possível criar um IF para quando for null, informar ao usuário que não existe informação.
if (vacuo === null) {
  console.log('não há informação');
} else {
  console.log(vacuo);
}

// Undefined é quando o valor nem é definido
// const input2; 
// Valor é undefined. Significa o valor de uma variável que não foi iniciada. Também é o valor retornado de uma função que não tem a cláusula RETURN

console.log(null == undefined); // true
console.log(null === undefined); // false
