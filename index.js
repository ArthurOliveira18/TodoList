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


    console.log(inputAdd.value)
    // Limpando o valor do inputAdd
    inputAdd.value = ""

    function addTask(){
        
    }

})




