/* const pagina = document.querySelector("body");
const titulo = document.querySelector("h1");
const msg = document.querySelector("#mensagem") */

/* Exemplo 1: */
// Ouvinte/Monitor de Eventos
 /* titulo.addEventListener("click", function(){
   pagina.style.backgroundColor = "lightgreen";
   msg.textContent = "Cor alternada!";
 }); */

 const pagina = document.querySelector("body");
 const titulo = document.querySelector("h1");
 const msg = document.querySelector("#mensagem");

 // Ouvinte/Monitor de Eventos
 titulo.addEventListener("click", function(){
   pagina.style.backgroundColor = "lighthgreen";
   msg.textContent = "Cor alternada!";
});

/* Exemplo 2: modo noturno */
const botao = document.querySelector("#noturno");
botao.addEventListener("click",function(){
  pagina.classList.toggle("modo-noturno");
  
  if (botao.textContent == "Ativar") {
    botao.textContent = "Desativar";
  } else {
    botao.textContent = "Ativar";
  }
});



/* Exemplo 3: simulação de cadastro */
const formulario = document.querySelector("form");
const campoNome = document.querySelector("#nome");
const campoNota1 = document.querySelector("#nota1");
const campoNota2 = document.querySelector("#nota2");
const divResultados = document.querySelector("#resultados");

formulario.addEventListener("submit", function(event){
  // Anulando o comportamento padrão de redirecionamento
  event.preventDefault();

  // Capturando o que foi digitado
  let nome = campoNome.value;
  let nota1 = parseFloat(campoNota1.value);
  let nota2 = parseFloat(campoNota2.value);
  
  // Calculando a média
  let media = (nota1 + nota2) / 2;

  // Verificando a situação
  let situacao;
  if(media >= 7){
    situacao = "aprovado";
  } else {
    situacao = "reprovado";
  }

  // 1) Criar um elemento dinamicamente
  let paragrafo = document.createElement("p");

  // 2) Montar o conteúdo deste novo elemento
  paragrafo.textContent = `${nome} - ${media} - ${situacao}`;

  // 3) Colocar este novo elemento/conteúdo no DOM
  divResultados.appendChild(paragrafo);

  console.log(paragrafo);

  // Limpar os campos do formulário
  formulario.reset();
  
  
});