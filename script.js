var cor = document.getElementById('cor')
const btn = document.getElementById('btn')

function getRandomColorHex() {
    var letras = '0123456789ABCDEF'
    var corHex = '#'
    for (var i = 0; i < 6; i++) {
        corHex += letras[Math.floor(Math.random() * 16)]
    }

    return corHex
}

function getRandomColorSimples() {
    let corSimples = 'rgb(' + random255() + ',' + random255() + ',' + random255() + ')'
    return corSimples
}

function random255(){
    return (Math.random() * (255 - 0) + 0).toFixed(0);
}


function trocaDeCorSimples(){
    let background = document.getElementById('background').style.backgroundColor
    cor.innerHTML = getRandomColorSimples()
    background.style.backgroundColor = `${cor.innerHTML}`
}

function trocaDeCorHex(){
    let background = document.getElementById('background').style.backgroundColor
    let retorno = getRandomColorHex()
    cor.innerHTML = retorno
    background = `${retorno}`
}

btn.addEventListener('click', function () {
    if(window.location.toString().includes("hex.html")){
        trocaDeCorHex()

    }
    if(window.location.toString().includes("index.html")){
        trocaDeCorSimples()
    }

})
