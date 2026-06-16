// DARK MODE

const btnDark = document.getElementById("btnDark");

btnDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// ELEMENTOS
const taskInput = document.getElementById("taskInput");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");

// ADICIONAR TAREFAS

btnAdd.addEventListener("click", () => {

const taskText = taskInput.value;

if(taskText === ""){
    alert("Digite uma tarefa!")
    return;
}

// CRIAR DIV TAREFA

const taskDiv = document.createElement("div");
taskDiv.classList.add("task");

// TEXTO DA TAREFA

const taskName = document.createElement("span");
taskName.innerText = taskText;

// ÁREA DOS BOTÕES

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("task-buttons");

// BOTÃO CONCLUIR

const btnComplete = document.createElement("button");
btnComplete.innerText="✅";
btnComplete.classList.add("btnComplete");

btnComplete.addEventListener("click", () => {
    taskDiv.classList.toggle("completed");
});

// BOTÃO EXCLUIR

const btnDelete = document.createElement("button");
btnDelete.innerText="🗑️";
btnDelete.classList.add("btnDelete");

btnDelete.addEventListener("click", () => {
    taskDiv.remove();
});

// ADICIONAR BOTÕES

buttonsDiv.appendChild(btnComplete);
buttonsDiv.appendChild(btnDelete);

// MONTAR TAREFA

taskDiv.appendChild(taskName);
taskDiv.appendChild(buttonsDiv);

// ADICIONAR NA LISTA

taskList.appendChild(taskDiv);

// LIMPAR INPUT

taskInput.value="";


});