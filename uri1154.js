var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '));

let media = 0;
let contador = 0;
let sair = false;

function calcularMedia(valor) {
    if (!sair) {
        if (parseFloat(valor) < 0) {
            sair = true
        } else {
            contador++
            media = media + parseFloat(valor);
        }
    } else {
        return
    }
}

lines.forEach(calcularMedia);
console.log((media / contador).toFixed(2));