/* Métodos/Funções de seleção no DOM
querySelector()     -> selecionar UM elemento
querySelectorAll()  -> selecionar VÁRIOS elementos
getElementById()    -> selecionar UM elemento por ID */

// Acessando elementos do DOM
const pagina = document.querySelector('body');
console.log(pagina);

const titulo = document.getElementById('titulo-principal');
const titulo2 = document.querySelector('#titulo-principal');
console.log(titulo);
console.log(titulo2);

/* Resultado do querySelectorAll é semore um NodeList
(que na prática funciona como um array) */
const subtitulos = document.querySelectorAll("h2");
console.log(subtitulos);
console.log(subtitulos[1]);

// Modificação nos elementos
titulo.textContent = "Olá JavaScript!";
subtitulos[0].innerHTML = "<i>Lógica geral do uso</i>";

/* CSS através do JS */

// CSS inline via JS
pagina.style.backgroundColor = "cornflowerblue";
pagina.style.fontFamily = "Georgia";

// CSS classe via JS
const item = document.querySelector("#lista-editores li:first-child");
console.log(item);
item.classList.add('destaque-item');


/* Mini-exercício:
Coloque numa variável ou constante todos os links
que estão na lista de referências. E mostre o resultado no console. */
const linksReferencia = document.querySelectorAll('li a');
console.log(linksReferencia); 

for( let link of linksReferencia ){
  link.setAttribute("target", "_blank");
}