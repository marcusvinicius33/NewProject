const buttonMenu = document.querySelector('.button-menu')
const menuLateral = document.querySelector('.menu-lateral')
const background = document.querySelector('.background')
const conteudo = document.querySelector('.conteudo')

buttonMenu.addEventListener('click', () =>{
    menuLateral.classList.toggle('ativo')
    buttonMenu.classList.toggle('ativo')
    conteudo.classList.toggle('ativo')
    background.classList.toggle('ativo') /*toggle: "alterna" o token, removendo-o (remove) se estiver presente e adicionando-o (add) se não estiver presente.*/ 
    document.body.style.backgroundColor = menuLateral.classList.contains('ativo') ? '#34495e' : '#ecf0f1'
})

background.addEventListener('click', () => {
    menuLateral.classList.remove('ativo')
    buttonMenu.classList.remove('ativo')
    conteudo.classList.remove('ativo')
    background.classList.remove('ativo')
    document.body.style.backgroundColor = '#ecf0f1'
})