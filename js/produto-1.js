let inputTamanho = document.querySelector('[name=tamanho]')
let outputTamanho = document.querySelector('[name=valoramento]')

function mostrarTamanho() {
    outputTamanho.value = inputTamanho.value
}

inputTamanho.oninput = mostrarTamanho 