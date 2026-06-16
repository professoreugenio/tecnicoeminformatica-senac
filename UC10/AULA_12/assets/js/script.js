const form = document.getElementById("formProduto");
const inputProduto = document.getElementById("produto");
const inputPreco = document.getElementById("preco");
const listaProdutos = document.getElementById("listaProdutos");
const totalProdutos = document.getElementById("totalProdutos");
const totalValores = document.getElementById("totalValores");
const filtro = document.getElementById("filtro");

const produtos = [];

function formatarMoeda(valor) {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function atualizarResumo(lista) {
  totalProdutos.textContent = lista.length;

  const total = lista.reduce(function(soma, produto) {
    return soma + produto.preco;
  }, 0);

  totalValores.textContent = formatarMoeda(total);
}

function renderizarProdutos(lista = produtos) {
  listaProdutos.innerHTML = "";

  if (lista.length === 0) {
    const itemVazio = document.createElement("li");
    itemVazio.className = "list-group-item text-center";
    itemVazio.textContent = "Nenhum produto cadastrado.";
    listaProdutos.appendChild(itemVazio);

    atualizarResumo(lista);
    return;
  }

  lista.forEach(function(produto) {
    const item = document.createElement("li");
    item.className = "list-group-item d-flex justify-content-between align-items-center";

    const texto = document.createElement("span");

    const nome = document.createElement("strong");
    nome.textContent = produto.nome;

    const quebra = document.createElement("br");

    const preco = document.createElement("small");
    preco.textContent = formatarMoeda(produto.preco);

    texto.appendChild(nome);
    texto.appendChild(quebra);
    texto.appendChild(preco);

    const botao = document.createElement("button");
    botao.className = "btn btn-sm btn-danger";
    botao.textContent = "Remover";
    botao.onclick = function() {
      removerProduto(produto.id);
    };

    item.appendChild(texto);
    item.appendChild(botao);

    listaProdutos.appendChild(item);
  });

  atualizarResumo(lista);
}

function adicionarProduto(event) {
  event.preventDefault();

  const nome = inputProduto.value.trim();
  const preco = Number(inputPreco.value);

  if (nome === "" || !Number.isFinite(preco) || preco <= 0) {
    alert("Preencha o nome do produto e um preço válido.");
    return;
  }

  const produto = {
    id: Date.now(),
    nome: nome,
    preco: preco
  };

  produtos.push(produto);

  form.reset();
  inputProduto.focus();

  renderizarProdutos();
}

function removerProduto(id) {
  const posicao = produtos.findIndex(function(produto) {
    return produto.id === id;
  });

  if (posicao !== -1) {
    produtos.splice(posicao, 1);
    renderizarProdutos();
  }
}

filtro.addEventListener("input", function() {
  const texto = filtro.value.trim().toLowerCase();

  const produtosFiltrados = produtos.filter(function(produto) {
    return produto.nome.toLowerCase().includes(texto);
  });

  renderizarProdutos(produtosFiltrados);
});

form.addEventListener("submit", adicionarProduto);

renderizarProdutos();
