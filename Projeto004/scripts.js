function addTarefa(){
    let valorDoInput = document.querySelector("input").value

    let li = document.createElement("li") /*Cria um elemento no html */
    li.innerHTML = valorDoInput + '<span onclick="deletarTarefa(this)" >❌</span>'

    document.querySelector("ul").appendChild(li)/*appendChild adiciona um "filho" no elemento */

    document.querySelector("input").value = ""
}

function deletarTarefa(li){
    li.parentElement.remove()
}
