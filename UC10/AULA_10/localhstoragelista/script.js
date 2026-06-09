
const btSalvar = document.getElementById("btnSalvar")
const btMostrar = document.getElementById("btnMostrar")
const btnRemover = document.getElementById("btnRemover")
const inputnome = document.getElementById("nomeUsuario")
const resultado = document.getElementById("resultado")


// Busca os nomes salvos ou cria um array vazio
let nomes = JSON.parse(localStorage.getItem("nomes")) || [];

function load() {
    let lista = "<ul class='list-group'>";
    
        nomes.forEach((nomes,index) => {
            lista += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                <span>${nomes}</span>

                <button 
                    class="btn btn-danger btn-sm btnExcluirNome" 
                    data-index="${index}">
                    Excluir
                </button>
            </li>
            `;
        });
    
        lista += "</ul>";
    
        resultado.innerHTML = lista;

}

load()

function salvarLocalStorage() {
    localStorage.setItem("nomes", JSON.stringify(nomes));
}


btSalvar.addEventListener("click", () => {

    nomeinput = inputnome.value
    nomes.push(nomeinput);

    salvarLocalStorage();

    load()

})

resultado.addEventListener("click",(event)=>{
    if (event.target.classList.contains("btnExcluirNome")) {

        const index = Number(event.target.dataset.index);

        alert("ítem:" + index)

    }
})