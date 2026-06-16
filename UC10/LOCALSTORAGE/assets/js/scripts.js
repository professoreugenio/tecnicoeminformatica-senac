const inputNome = document.getElementById("nomeUsuario");
const btnSalvar = document.getElementById("btnSalvar");
const btnMostrar = document.getElementById("btnMostrar");
const btnRemover = document.getElementById("btnRemover");
const resultado = document.getElementById("resultado");



function clearresultado() {
    setTimeout(() => {

        resultado.innerHTML = "";

    }, 3000);
}

btnSalvar.addEventListener("click", () => {

    const nome = inputNome.value;

    if (nome === "") {
        resultado.textContent = "Digite um nome antes de salvar.";
        clearresultado()
        return;
    }

    localStorage.setItem("nomeUsuario", nome);

    resultado.textContent = "Nome salvo com sucesso!";
    inputNome.value = "";
    clearresultado()



})

btnMostrar.addEventListener("click", () => {

    const nomeSalvo = localStorage.getItem("nomeUsuario")

    if (nomeSalvo === null) {
        resultado.textContent = "Nenhum nome foi salvo ainda.";
        clearresultado()
    } else {
        resultado.textContent = "Nome salvo: " + nomeSalvo;
        clearresultado()
    }






})


btnRemover.addEventListener("click", () => {


    const nomeSalvo = localStorage.getItem("nomeUsuario")

    if (nomeSalvo === null) {
        resultado.textContent = "Nenhum dado para excluir!";
        clearresultado()
        return
    }


    resultado.textContent = "Nome " + nomeSalvo + " removido do localStorage.";
    localStorage.removeItem("nomeUsuario");
    clearresultado()


})