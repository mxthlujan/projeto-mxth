/* Funções
Blocos de código com os seguintes objetivos:
1) Organização, separação de responsibilidades 
2) Reaproveitamento */

/* Sintaxe 1 (tradicional) 
Função anônima/literal */
let exemplo1 = function(){
  console.log('Função Anônima');
};
exemplo1(); // chamada/invocação

/* Sintaxe 2 (tradicional)
Função nomeada/declarada */
function exemplo2(){
  console.log('Função Nomeada');
}
exemplo2();

/* Sintaxe 3 (moderna/atual)
Função Seta (Arrow Function) */
let exemplo3 = () => {
  console.log('Arrow Function');
};
exemplo3();


/* Função com parâmetros e retorno */
function soma(valor1, valor2){
  return valor1 + valor2; 
}

console.log( soma(10, 5) );
console.log( soma(45, 2) );
console.log( soma(1450, 78.3) );

let total = soma(30, 15);
console.log(total);

let numero1 = 1000;
let numero2 = 300;
let resultado = soma(numero1, numero2);
console.log(resultado);

console.log("--------")

// Versão 1
/* function dobra(valor){
  return valor * 2;
} */

// Versão 2 (arrow function)
/* let dobra = (valor) => {
  return valor * 2;
} */

// Versão 3 (arrow function)
let dobra = valor => valor * 2;

console.log( dobra(10) );

let preco = 1250;
let desconto = 110.88;
let precoFinal = preco - desconto;

 function converte(valor){
  return valor.toLocaleString('pt-br',{
    style: 'currency',
    currency: 'BRL'
  });
} 

/* let converte = valor => {
  return valor.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL'
  })
} */

/* console.log( converte(preco) );
console.log( converte(desconto) );
console.log( converte(precoFinal) ); */
 
let precoFormatado = converte(preco);
let descontoFormatado = converte(desconto);
let pfFormatado = converte(precoFinal);

console.log(`Preço era ${precoFormatado}`);
console.log(`Preço com desconto ${pfFormatado}`)