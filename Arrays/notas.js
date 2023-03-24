// Declaração das notas
const notas = [10, 6, 8]

// Adicionar nota no array
notas.push(7);
console.log(notas)
// push adiciona o parâmetro ao final da query

// É possível adicionar vários valores, inclusives valores de types diferentes
notas.push(9, 4.2, "carro")
console.log(notas)


const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media)