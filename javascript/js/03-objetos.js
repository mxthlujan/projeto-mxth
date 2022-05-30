/* Objetos: estrutura de dados não-indexados.
Dados são formados por pares de chave/valor. */

// Exemplo 1: objeto simples
let livro = {
  //chave : valor (propriedade)
  titulo: "Senhor dos Anéis",
  autor: "J.R.R. Tolkien",
  ano: 1954
};

console.log(livro);

console.log(livro.titulo);
console.log(livro.ano);


// Exemplo 2: objeto com array
let pessoa = {
  nome: "Matheus Lujan",
  idade: 20,
  sexo: "masculino",
  telefones: ["11-123-987", "11-456-321"],
  medidas: {
    peso: 85,
    altura: 1.82
  }
};

console.log(pessoa.nome)
console.log(pessoa.idade)
console.log(pessoa.telefones[1])
console.log(pessoa.medidas.altura)

/* Exercício:
1) Crie um array chamado livros, contendo 3 objetos/livro, cada um com um título e autor

2) Mostre no console o titulo e o autor de pelo menos 1 dos livros*/

let livros = [
  { titulo:"O caçador de pipas",
    autor: "Khaled Housseini"
  },
  {
    titulo:"As crônicas de Nárnia",
    autor: "C.S. Lewis"
  },
  {
    titulo:"a 5° onda",
    autor: "Rick Yancey"
  }  
];
 

console.log(livros[1].titulo);
console.log(livros[1].autor);

console.log(livros[0].autor, livros[0].titulo);


   


