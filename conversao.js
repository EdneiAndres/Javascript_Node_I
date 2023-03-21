// Conversao implícita
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString); // Corresponde APENAS os conteúdos valors 
console.log(numero === numeroString); // Corresponde ao valor considerando o tipo de valor
// O tipo de valor pode ser verificado com typeof
console.log(typeof numero); // Retorna NUMBER
console.log(typeof numeroString); // Retorna STRING

// Conversao explícita
// Number() e String()
console.log(numero + Number(numeroString));

var respostaDeTudo = 42
let idade = 29
const pi = 3.14

{
    var respostaDeTudo = 3.14
    let idade = 42
    const pi = 29
    console.log(respostaDeTudo, idade, pi)

}
console.log(respostaDeTudo, idade, pi)