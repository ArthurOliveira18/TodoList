const form = document.getElementById('formList') //Pegando o form

form.addEventListener('submit', function (ev) {
    ev.preventDefault()

    const inputAdd = document.getElementById('inputAdd') //Pegando o input pra adicionar tarefas
    const inputSearch = document.getElementById('inputSearch') //Pegando o input para pesquisar tarefas depois
    const lista = document.getElementById('filtro') //Aqui eu estou pegando a lista completa com todos os elementos.

    // Aqui estou pegano cada valor individualmente a lista
    const valorAll = lista.options[0].value
    const valorPending = lista.options[1].value
    const valorComplete = lista.options[2].value
    


})


// Aqui eu estou pegando o valor do array "tasks"
const tasksString = localStorage.getItem("tasks");

// Logo aqui em baixo eu estou conferindo se tem algum conteudo dentro do array "tasks" Caso n tenha, crie um array chamado "tasks"
let tasks;

if (!tasksString || tasksString === "null" || tasksString === "") {
    tasks = [];
} else {
    tasks = JSON.parse(tasksString);
}


// Define o último ID salvo ou inicia em 1
let taskId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;


function addTask() {
    if (inputAdd.value == "") {
        alert("O campo de adicionar task está vazio")
    } else {


        // Criando a estrutura para salvar o ID e o texto do usuario
        const task = {
            id:taskId,
            text: inputAdd.value
        }
        // Toda vez que clico para add tarefa, ele incrementa mais um no ID e depois salva em um array
        taskId++
        tasks.push(task)

        //Salvando o array tasks no local storage 
        localStorage.setItem("tasks" , JSON.stringify(tasks))
        
        
        const infoL = localStorage.getItem("tasks")
        console.log(infoL)
        

        renderTasks();

        inputAdd.value = ""

       
        
    }

    renderTasks();


}

// Função para mostrar na tela oque está armazenado no Local Storage
function renderTasks() {
    const taskList = document.getElementById('taskList')
    //  Limpa a lista para evitar duplicação
    taskList.innerHTML = "";

    // Iterar sobre cada elemento da lista e pegar cada elemento e mostrar na tela
    tasks.forEach(task => {
        const li = document.createElement('li')
        li.textContent = `${task.id} : ${task.text}`
        taskList.appendChild(li)
    });
}






