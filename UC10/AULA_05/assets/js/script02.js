
const botaomodoDark = document.getElementById("btnDark")
const inputTarefa = document.getElementById("taskInput")
const botaoAdd = document.getElementById("btnAdd")
const ListadeTarefas = document.getElementById("taskList")



const modosalvo = localStorage.getItem("modoDark");

if (modosalvo === "ativo") {
    document.body.classList.add("dark");
    botaomodoDark.textContent = "☀️ Light Mode";
} else {
    document.body.classList.remove("dark");
    botaomodoDark.textContent = "🌙 Dark Mode";
}


