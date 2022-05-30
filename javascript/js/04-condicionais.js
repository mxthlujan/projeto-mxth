/* if, else, else if
switch, case, default, break */

let aluno = "Matheus";
let nota1 = 9;
let nota2 = 7;
let media = (nota1 + nota2) / 2;

console.log(`Aluno: ${aluno}`);
console.log(`Notas: ${nota1} e ${nota2}`);
console.log(`Média obtida: ${media}`);
console.log(`Média obtida: ${media.toFixed(2)}`)

/* Algoritmo: se a média for maior ou igual
a 7, então o aluno estará aprovado.
Senão, estará reprovado. */
if( media >= 7 ){
  console.log("aprovado");
} else {
  console.log("reprovado");
}

/* Algoritmo:
Se a média for menor que 3, então o desempenho será péssimo. Senão, se for menor que 5, ruim. Senão, se for menor que 7, então regular. Senão, se menor que 9, então bom. Senão, ótimo. */
let desempenho; // undefined

if( media < 3 ){
    desempenho = "péssimo";
} else if( media < 5 ){
    desempenho = "ruim";
} else if( media < 7 ){
  desempenho = "regular";
} else if( media < 9 ){
  desempenho = "bom";
} else {
  desempenho = "ótimo";
}
console.log(desempenho);

/* switch/case/default */

/* Chatbot:
1 -> solicitar informações
2 -> abrir uma reclamação
3 -> fazer elogio
? -> falar atendente */

let opcao = 1;
let mensagem;
switch(opcao){
  case 1: mensagem = "Legal, do que precisa?"; break;

  case 2: mensagem = "Hum, que pena... o que houve?"; break;

  case 3: mensagem = "Que bacana! Me conte mais :)"; break;

  default: // else
  mensagem = "Não entendi... vou transferir."; break;  
}

console.log(mensagem);

/* shorthand if/else 
Usando o operador ternário ?: */
console.log(media >= 7 ? 'aprovado' : 'reprovado');