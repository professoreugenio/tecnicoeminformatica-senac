const botaomodoDark = document.getElementById("btnDark")
const inputTarefa = document.getElementById("taskInput")
const botaoAdd = document.getElementById("btnAdd")
const ListadeTarefas = document.getElementById("taskList")
const modoDark = localStorage.getItem("modoDark")

localStorage.setItem("modoDark", "ativo")

botaomodoDark.addEventListener("click", () => {
    const modoDark = localStorage.getItem("modoDark")
    localStorage.setItem("modoDark", "ativo")
})