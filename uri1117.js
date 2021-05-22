var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\r')

const limparArray = valor => parseFloat(valor).toFixed(1)

const notas = lines.map(limparArray)
var nota = 0.0
var notasValidas = 0

for(let index = 0; index < notas.length; index++){
    if(notas[index] < 0 || notas[index] > 10){
        console.log('nota invalida')
    }else{
        notasValidas++
        nota = nota + parseFloat(notas[index])
        if(notasValidas >= 2){
            break
        }
    }
}
console.log("media = "+(nota/2).toFixed(2))