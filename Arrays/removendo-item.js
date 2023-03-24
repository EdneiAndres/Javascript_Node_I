const notas = [10, 6, 8, 5.5, 10];
console.log(notas);
const notasCiencia = [9.6, 8.4, 2, 8]

// POP remove o último valor do array


function calcularMedia(n){
let i = 0
let soma = 0
while (i < n.length) {
    soma = soma + n[i]
    i++;
} return soma / n.length;
}

console.log(calcularMedia(notasCiencia))
