/* Arrays (Vetores e Matrizes)
Lista de dados na memória */

// Criando um array
let alunos = ["Ozzy", "Dio", "Gillan", "Hughes"];

// Analisando a estrutura
/* console.log(alunos);

console.log(alunos[1]); // Dio
console.log(alunos[0]); // Ozzy */

/* Mini-exercícios:
1) Crie um novo array chamado filmes
2) Coloque 5 filmes de sua preferência dentro dele
3) Monte uma frase (qualquer texto) e também exibindo
nela o nome de pelo menos 2 filmes do array. */

let filme = ["Interestellar", "Até o último homen", "Clube da luta", "Avatar", "Guerra mundial Z" ];
let ano = 2020

console.log(filme)

console.log( // template string ``
  `Eu assisti o ${filme[1]} 5 vezes em ${ano} e assisti pela primeira vez o ${filme[0]} este ano`
);

// MATRIZ (array de duas ou mais dimensões)
let bandas = [
     //     0                  1                2
  ["The Neighbourhood", "Arctic Monkeys", "Chase Alantic",], // 0

  ["Mötley Crüe", "Twenty One Pilots"], // 1

  ["Deep Purple", "Black Sabbath"] // 2
];

console.log(bandas[0][1]); // Arctic Monkeys
console.log(bandas[1][0]); // Mötley Crüe


