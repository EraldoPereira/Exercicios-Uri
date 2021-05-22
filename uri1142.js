var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '))
const X = parseInt(lines[0][0])
const Y = parseInt(lines[0][1])
var texto = ''
var contador = 0

if (X < 1 || X > 20 || X > Y || Y > 100000) {
    return
} else {


    for (let index = 1; index <= Y; index++) {
        texto = texto + ' ' + index
        contador++
        if (X === contador) {
            console.log(texto.trim())
            contador = 0
            texto = ''
        }
    }

    if (contador !== 0) {
        console.log(texto.trim())
    }
}
