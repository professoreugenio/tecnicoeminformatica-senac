const botaoDark = document.getElementById("btnDark");
const botaoAdd = document.getElementById("btnAdd");
const inputTarefa = document.getElementById("taskInput")


botaoDark.addEventListener("click", () => {
/** Pegando chave do id */

const chaveid = botaoDark.textContent

alert("a chave do id:"+ chaveid)

})

botaoAdd.addEventListener("click", () => {
/** pegando o valor do input pelo id */

const valorinput = inputTarefa.value
const tamanho = valorinput.length;

alert("Dados do input: "+valorinput+ " com " + tamanho + " caracteres")

})