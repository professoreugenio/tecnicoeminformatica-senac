# CONTEÚDO DA AULA DE HOJE

## PEGANDO VALORES
Vamos pegar os valores das ids.

nome variavelA=Nomevariavel.value

Ex: const valor = nomevarial.textContent;
const valor2 = document.querySelectAll("nomevariavel")
--
### EXIBINDO NO CONSOLE
Acessar o DEV da página F12
console.log("Valor:"+variavelA)
--
## USO DE CONDICIONAIS
Uso do if para analisar a informação
Ex: 
if(variavel === "") {  return  } else {   }
Ou seja se variavel for igual a vazio para a execução
do código senão continua a execução do código

if(variavel !==""){ Ok } else { return }
Ou seja se variáve for diferente de vazio executa 
a linha de código senão para a execução do código

#### Outros exemplos
if(variavel > valor )
Ou seja se variavel for maior que um valor
if(length(variavel)< valor)
Ou seja se o quantidades de caracteres form menor que
um valor.
--
## Armazenamento de dados em LocalStorage.
Armazenar informações ma memória da página.
Utilizado apenas para dados não sencíveis.
histórico de acessos, mododark

visualizar no dev em aplicações

### Inserção no localStorage
localStorage.setItem("rótulo","valor")

### Leitura do LocalStorage
localStorege.getItem("rótulo")

### Remove do Localstorage
localStorage.removeItem("rótulo")

## USO DO GIT

Comandos inciais para identificar o usuário
git config --global user.name "nomeusuario"
git config --global user.email "seuemeailcadastro"

Comandos 
git add . (Prepara o envio).
git commit -m "primeira Atualização" (cria uma chave para a atualização.
git push (envia as atualizações.)


