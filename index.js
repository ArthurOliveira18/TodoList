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

function addTask() {

    console.log(inputAdd.value)

    if (inputAdd.value == "") {
        alert("O campo de adicionar task está vazio")
    } else {
        const li = document.createElement('li')
        li.textContent = inputAdd.value

        const taskList = document.getElementById('taskList')
        taskList.appendChild(li)

        inputAdd.value = ""
    }


}




