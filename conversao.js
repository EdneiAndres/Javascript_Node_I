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
