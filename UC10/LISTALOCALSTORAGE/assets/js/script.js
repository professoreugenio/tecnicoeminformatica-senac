const inputTarefa = document.getElementById("inputTarefa");
const btnAdicionar = document.getElementById("btnAdicionar");
const btnLimparTudo = document.getElementById("btnLimparTudo");
const mensagem = document.getElementById("mensagem");
const listaTarefas = document.getElementById("listaTarefas");


let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];


