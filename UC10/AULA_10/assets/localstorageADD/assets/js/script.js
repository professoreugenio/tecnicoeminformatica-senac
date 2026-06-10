const inputUsuario = document.getElementById("nomeUsuario")
const btSalvar = document.getElementById("btnSalvar")
const btnMostrar = document.getElementById("btnMostrar")
const btnRemover = document.getElementById("btnRemover")
const resultado = document.getElementById("resultado")
function ocultarresultado() {
    setTimeout(() => {
        resultado.classList.add("d-none")
    }, 3000);
}

function renoverclass() {
    resultado.classList.remove
        ("alert-primary",
        "alert-success",
        "alert-danger",
        "alert-warning")
    resultado.textContent = ""
    resultado.classList.remove("d-none")
}



btSalvar.addEventListener("click", () => {
    const nome = inputUsuario.value
    renoverclass()
    if (nome === "") {
        resultado.classList.add("alert-danger")
        resultado.textContent = "Campo vazio. Tente novamente"
        ocultarresultado()
        return
    }
    localStorage.setItem("nomeRegistro", nome)
    resultado.classList.add("alert-success")
    resultado.textContent = "CADSATRADO COM SUCESSO"
    ocultarresultado()
})
btnMostrar.addEventListener("click", () => {
    renoverclass()
    let nomeSalvo = localStorage.getItem("nomeRegistro")

    if(nomeSalvo==null) {

        resultado.classList.add("alert-success")
    resultado.textContent = "Nenhum nome salvo"
    } else {

        resultado.classList.add("alert-success")
    resultado.textContent = nomeSalvo + " armazenado no LocalStorage"

    }
    
    ocultarresultado()
})


btnRemover.addEventListener("click", () => {
    renoverclass()
    let nomeSalvo = localStorage.getItem("nomeRegistro")
    resultado.classList.add("alert-danger")
    if(nomeSalvo==null){
       
        resultado.textContent = "Nenhuma informação para apagar"
    } else {
        localStorage.removeItem("nomeRegistro")
        resultado.textContent = nomeSalvo + " Excluído com sucesso"

    }
    ocultarresultado()
})