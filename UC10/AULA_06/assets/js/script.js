const botaoDark = document.getElementById("btnDark");
const botaoAdd = document.getElementById("btnAdd");
const inputTarefa = document.getElementById("taskInput")
const lista = document.getElementById("lista")

const registroTarefa = localStorage.getItem("tarefa")

lista.innerHTML = registroTarefa


const resposta = document.getElementById("resposta");
const corVerde = "#a2f50733"
const corLaranja = "#f5a2073b"
const corVermelho = "#eb02022d"
const textoVazio = "😳Preencha alguma informação no texto"
const textoOk = "😊Registro realizado com sucesso"
const textoMenor = "Digite pelo menos 5 caracteres"

function obterData() {
    const data = new Date();
    return data.toLocaleDateString('pt-BR') 
    + " " + data.toLocaleTimeString('pt-BR');
}



function respostaAuto(texto, cor) {
    resposta.style.display = "block"
    resposta.style.backgroundColor = cor
    resposta.innerHTML = texto

}

function respostaAutoSumir() {
    setTimeout(() => {
        resposta.style.display = "none"
        botaoAdd.innerHTML = "Adicionar"
    }, 2500)
}



botaoDark.addEventListener("click", () => {
    /** Pegando chave do id */

    const chaveid = botaoDark.textContent

    alert("a chave do id:" + chaveid)

})

botaoAdd.addEventListener("click", () => {
    /** pegando o valor do input pelo id */

    botaoAdd.innerHTML="Aguarde..."

    const valorinput = inputTarefa.value
    const tamanhoInput = valorinput.length;

    if (valorinput === "") {
        respostaAuto(textoVazio, corVermelho)


    } else if (tamanhoInput < 5) {

        respostaAuto(textoMenor, corLaranja)


    } else {
        // Mostrar retorno após 3 segundos

        respostaAuto(textoOk, corVerde)
       
        localStorage.setItem("tarefa", valorinput + obterData())

    }

    respostaAutoSumir()

  
        lista.innerHTML = localStorage.getItem("tarefa")
    




})