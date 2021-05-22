var input = require('fs').readFileSync('stdin', 'utf8');
//var lines = parseInt(input.split('\n'))
var lines = input.split('\n')
//console.log(lines.length)

let maior = 0
let posicao = 0

for(let i = 0; i < 100; i++){
    if(maior < parseInt(lines[i])){
        maior = lines[i]
        posicao = i
    }
}

//console.log(lines[51])

console.log(maior)
console.log(posicao+1)
