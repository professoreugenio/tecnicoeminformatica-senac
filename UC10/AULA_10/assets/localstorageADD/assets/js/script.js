const inputUsuario = document.getElementById("nomeUsuario")
const btSalvar =document.getElementById("btnSalvar")
const btnMostrar =document.getElementById("btnMostrar")
const btnRemover =document.getElementById("btnRemover")
const resultado =document.getElementById("resultado")
function ocultarresultado() {
    setTimeout(() => {
        resultado.classList.add("d-none")
    }, 3000);
}

function renoverclass(){

resultado.classList.remove("alert-primary")
    resultado.classList.remove("alert-success")
    resultado.classList.remove("alert-danger")
    resultado.classList.remove("alert-warning")
    resultado.textContent=""
    resultado.classList.remove("d-none")

}
btSalvar.addEventListener("click",()=>{
    const nome = inputUsuario.value
    renoverclass()
    if(nome === "") {
        resultado.classList.add("alert-danger")        
        resultado.textContent="Campo vazio. Tente novamente"
        ocultarresultado()
        return        
    }
    localStorage.setItem("nomeRegistro",nome)
    resultado.classList.add("alert-success")
    resultado.textContent="CADSATRADO COM SUCESSO"
    ocultarresultado()
})
btnMostrar.addEventListener("click",() =>{
    renoverclass()
    const nomeSalvo = localStorage.getItem("nomeRegistro")
    resultado.classList.add("alert-success")
    resultado.textContent= nomeSalvo + " armazenado no LocalStorage"
     ocultarresultado()
})