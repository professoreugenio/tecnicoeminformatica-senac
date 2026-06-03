
    const formFuncionario = document.getElementById("formFuncionario");
    const inputNome = document.getElementById("nome");
    const inputSetor = document.getElementById("setor");
    const inputSalario = document.getElementById("salario");
    const inputDataAdmissao = document.getElementById("dataAdmissao");
    const listaFuncionarios = document.getElementById("listaFuncionarios");

    // Busca os funcionários salvos no localStorage
    let funcionarios = JSON.parse(localStorage.getItem("funcionarios")) || [];

    // Função para salvar os dados no localStorage
    function salvarLocalStorage() {
      localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
    }

    // Função para formatar salário em Real
    function formatarSalario(valor) {
      return Number(valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
    }

    // Função para formatar data no padrão brasileiro
    function formatarData(data) {
      const dataFormatada = new Date(data + "T00:00:00");

      return dataFormatada.toLocaleDateString("pt-BR");
    }

    // Função para exibir funcionários na tela
    function exibirFuncionarios() {
      listaFuncionarios.innerHTML = "";

      if (funcionarios.length === 0) {
        listaFuncionarios.innerHTML = `
          <p class="mensagem-vazia">Nenhum funcionário cadastrado.</p>
        `;
        return;
      }

      funcionarios.forEach((funcionario, index) => {
        const card = document.createElement("div");
        card.classList.add("card-funcionario");

        card.innerHTML = `
          <div class="dados-funcionario">
            <p><strong>Nome:</strong> ${funcionario.nome}</p>
            <p><strong>Setor:</strong> ${funcionario.setor}</p>
            <p><strong>Salário:</strong> ${formatarSalario(funcionario.salario)}</p>
            <p><strong>Data de admissão:</strong> ${formatarData(funcionario.dataAdmissao)}</p>
          </div>

          <button class="btn-excluir" onclick="excluirFuncionario(${index})">
            Excluir
          </button>
        `;

        listaFuncionarios.appendChild(card);
      });
    }

    // Função para cadastrar funcionário
    formFuncionario.addEventListener("submit", function(event) {
      event.preventDefault();

      const nome = inputNome.value.trim();
      const setor = inputSetor.value;
      const salario = inputSalario.value;
      const dataAdmissao = inputDataAdmissao.value;

      if (nome === "" || setor === "" || salario === "" || dataAdmissao === "") {
        alert("Preencha todos os campos.");
        return;
      }

      const novoFuncionario = {
        nome: nome,
        setor: setor,
        salario: salario,
        dataAdmissao: dataAdmissao
      };

      funcionarios.push(novoFuncionario);

      salvarLocalStorage();
      exibirFuncionarios();

      formFuncionario.reset();
    });

    // Função para excluir funcionário
    function excluirFuncionario(index) {
      const confirmar = confirm("Deseja realmente excluir este funcionário?");

      if (confirmar) {
        funcionarios.splice(index, 1);

        salvarLocalStorage();
        exibirFuncionarios();
      }
    }

    // Exibe os funcionários quando a página carregar
    exibirFuncionarios();
