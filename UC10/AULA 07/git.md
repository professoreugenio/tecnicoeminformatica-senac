# CONFIGURAÇÕES DO GIT

## PERMISSÕES DE ACESSO
git config --global user.name "nomeusuario"
git config --global user.email "seuemailcadastrado"

<!-- Estes comandos use no primeiro acesso
em sua máquina. Neste processo normalmente
abre-se uma tela para dar permissão no github
ACEITE AS PEMISSÕES
 -->
## ROTINA PARA ENVIAR ARQUIVOS
git add .
<!-- Prepara os arquivos para envio -->
git commit -m "um nome"
<!-- criar uma chave do pacote de dados -->
git push
<!-- envia os arquivos para o github -->
<!-- Estes três comandos serão repetidos sempre
ao final de uma operação. -->
## COMANDOS PARA BAIXAR ATUALIZAÇÕES
git pull
<!-- atualiza os arquivos do servidor para sua máquina-->

### EXEMPLO DE USO:
Pedro trabalhou em seu projeto no trabalho. Terminou 
as atualizações e executou os comandos: git add .
git commit -m "nome" e git push para atualizar nos servidor.
Em sua casa do final de semana Pedro fez um git clone
para trabalhar no seu projeto em casa. Atualizou e executou
novamente: git add ., git commit -m "umnome" e git push.
Na segunda-feira chegando no trabalho, abriu seu computador
e fez um git pull para atualizar os arquivos na máquina 
do seu trabalho.

## CLONAR O REPOSITÓRIO NA MÁQUINA
git clone copienomedorepositórioecole.git
<!-- A pasta do seu projeto será criada 
com todos os arquivos -->
