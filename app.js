//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
const amigo = document.getElementById('amigo');

function adicionarAmigo() {
    const nomeAmigo = amigo.value.trim(); //trim remove espaços em branco

    //verifica se o campo está vazio
    if (nomeAmigo === "") {
    alert("Por favor, insira um nome");
    return;
    }
    amigos.push(nomeAmigo);
    amigo.value = "";
    amigo.focus(); //mantém o foco no campo de texto
    listarAmigos();
}

function listarAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}