const btnDark = document.getElementById("btnDark");
const inputTarefa = document.getElementById("taskInput");
const botaoAdicionar = document.getElementById("btnAdd");
const TaskLista = document.getElementById("taskList");

const mododark = localStorage.getItem("mododark");
if (mododark == "ativo") {
    document.body.classList.add("dark");
    btnDark.textContent = "☀️ Ligh mode";
}


let lista = JSON.parse(localStorage.getItem("registronomes")) || [];

function exibelista() {

    TaskLista.innerHTML = "";

    if (lista.lenght === 0) {

        TaskLista.innerHTML = "<div>Nenhum dado cadstrado</div>";
        return

    }

    lista.forEach((nome) => {
        const div = document.createElement("div");
        div.textContent = nome;
        TaskLista.appendChild(div);
    });
}


exibelista()

btnDark.addEventListener("click", () => {
    let vd = localStorage.getItem("mododark");
    if (vd == "ativo") {
        localStorage.removeItem("mododark");
        document.body.classList.remove("dark");
        btnDark.textContent = "🌙 Dark Mode";
    } else {
        localStorage.setItem("mododark", "ativo");
        document.body.classList.add("dark");
        btnDark.textContent = "☀️ Ligh mode";
    }
})

botaoAdicionar.addEventListener("click", () => {

    let nome = inputTarefa.value
    if (nome == "") {

        alert("Nome está vazio");
    } else {
        lista.push(nome);
        localStorage.setItem("registronomes", JSON.stringify(lista));
        exibelista()

    }

})