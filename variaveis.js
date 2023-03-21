// var
var altura = 5;
var largura = 7;

area = altura * largura;
console.log(area);
var area;
// É possível declarar a variável depois de usá-la. Primeiro ele vai ler todos os var, depois executar o script.

let forma = 'retangulo';
let altura2  = 5;
let largura2 = 7;
let area2;

if (forma === "retangulo") {
  area2 = altura2 * largura2;
} else {
  area = (altura2 * largura2) / 2;
}

console.log(area2);

const formA = 'quadrado';
const alturA = 5;
const largurA = 7;

if (formA == 'quadrado') {
  areA = alturA * largurA;
} else {
  areA = alturA * largurA / 2;
}

console.log(areA)