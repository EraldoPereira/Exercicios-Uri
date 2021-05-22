var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '));

let media = 0;
let contador = 0;
let novocalculo = true;
let sair = false;

function calcularMedia(nota) {
    if (!sair) {
        if (novocalculo) {
            if (parseFloat(nota) < 0 || parseFloat(nota) > 10) {
                console.log("nota invalida");
            } else {
                contador++;
                media = parseFloat(nota) + media;
                if (contador == 2) {
                    media = media / 2;
                    console.log("media =", (media).toFixed(2));
                    console.log("novo calculo (1-sim 2-nao)");
                    novocalculo = false;
                    contador = 0;
                    media = 0;
                }
            }
        } else {
            if (parseFloat(nota) == 1) {
                novocalculo = true;
            } else if (parseFloat(nota) == 2) {
                sair = true;
            } else {
                console.log("novo calculo (1-sim 2-nao)");
            }
        }
    } else {
        return
    }
}

lines.forEach(calcularMedia);