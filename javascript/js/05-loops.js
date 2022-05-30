/* Loops (Estruturas de Repetição)
 
while (enquanto)
do/while (faça/enquanto)
for (para) */

// while
/* let contador = 1;
while(contador <= 10){
    console.log(`Valor de contador: ${contador}`);
    contador++; // incremento
    // contador += 2;
} 

/* Nomes comuns para variáveis de controle
de loop: i, j ou k */

/* // do/while (SEMPRE IRÁ FUNCIONAR NO MÍNIMO 1X)
let i = 1; // variável de controle do loop
do {
  console.log(`Valor de i: ${i}`);
  i++;
} while( i <= 3 ) */


// for
// variável de controle ; condição ; atualização
for( let i = 1; i <= 5; i++ ){
  console.log(`I vale ${i}`);
}
  
  
/* Loops para acessar Arrays */
let bandas = ["The Neighbourhood", "Arctic Monkeys", "Chase Alantic"];

for( let i = 0; i < bandas.length; i++){
  console.log(bandas[i]);
}

console.log("--------");

/* for/of  (bom para arrays) */
console.log("for/of")
for(let banda of bandas){
  console.log(bandas);
}

console.log("--------")

/* for/in (bom para objetos) */
let pessoa = {
  nome: "Matheus",
  idade: 20
};

for(let dados in pessoa){
  console.log(`${dados} - ${pessoa[dados]}`)
  /* console.log(pessoa[dados]); */
}

  

