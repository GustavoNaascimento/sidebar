function abrir() {
    document.getElementById('sidebar').classList.toggle('open-sidebar')
}

const botao_mode = document.querySelector(".botao-mode")
const cont_mode = document.querySelector('#cont-mode')
const body = document.getElementsByTagName('body')[0]

cont_mode.addEventListener('click', (e) => {
    e.preventDefault()
    botao_mode.classList.toggle('on')
    body.classList.toggle('dark')
})

