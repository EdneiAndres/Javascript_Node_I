const alunos = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinícius', 'Renan', 'Renata', 'Daisy', 'Camilo'];

// Slice pega uma parte do array, definida pelo indice. Neste caso 0 até 10
let sala1 = alunos.slice(0, alunos.length / 2)
// Se você não definir um final, ele vai pegar até terminar o array, no caso alunos.slice(10) pegaria do 10 até terminar todos os índices
let sala2 = alunos.slice(alunos.length / 2, alunos.length)
console.table(sala1)
console.table(sala2)
// Console.table retorna o log em forma de tabela. Não foi ensinado no curso, mas como aprendi isso no blog tabnews eu quero praticar.