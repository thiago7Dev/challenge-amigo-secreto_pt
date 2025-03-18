//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
const amigo = document.getElementById("amigo");

function adicionarAmigo() {
  const nomeAmigo = amigo.value.trim(); //trim remove espaços em branco

  //verifica se o campo está vazio
  if (nomeAmigo === "") {
    alert("Por favor, insira um nome");
    return;
  }

  //limpar exibição de resultado
  const resultado = document.getElementById("resultado");
  resultado.textContent = "";

  amigos.push(nomeAmigo);
  amigo.value = "";
  amigo.focus(); //mantém o foco no campo de texto
  listarAmigos();
}

// Permitir adicionar amigo pressionando "Enter" no input
amigo.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});

function listarAmigos() {
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  //validar se a lista de amigos está vazia
  if (amigos.length === 0) {
    alert("Por favor, adicione amigos antes de sortear");
    return;
  }
  //remover a exibição da lista de amigos
  const listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";

  const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

  const resultado = document.getElementById("resultado");
  resultado.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;

  //limpar a lista de amigos
  amigos = [];
}
