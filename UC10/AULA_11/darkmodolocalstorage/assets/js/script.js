const btnDark = document.getElementById("btnDark")
const inputTarefa = document.getElementById("taskInput")
const botaoAdd = document.getElementById("btnAdd")
const TaskLista = document.getElementById("taskList")
const mododark = localStorage.getItem("mododark")
if (mododark == "ativo") {
    document.body.classList.add("dark")
    btnDark.textContent = "☀️ Ligh mode"
}
btnDark.addEventListener("click", () => {
    let vd = localStorage.getItem("mododark")
    if (vd == "ativo") {
        localStorage.removeItem("mododark")
        document.body.classList.remove("dark")
        btnDark.textContent = "🌙 Dark Mode"
    } else {
        localStorage.setItem("mododark", "ativo")
        document.body.classList.add("dark")
        btnDark.textContent = "☀️ Ligh mode"
    }
})