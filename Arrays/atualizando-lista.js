const nomes = ['João', 'Ana', 'Caio', 'Lara', 'Marcos', 'Leonardo'];

// splice (Indice onde começa, quantos indices serão removidos, conteúdos a serem adicionados
console.table(nomes)
nomes.splice(2, 3, "Silvo", "Pedro Petigru", "Sirius")
console.table(nomes)
// O splice altera o array original, vc não precisa salvá-lo em uma nova variável