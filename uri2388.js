var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '))
const tamanho = parseInt(lines[0])
var distancia = 0

for(let index = 1; index <= tamanho; index++){
    var dados = parseInt(lines[index][0]) * parseInt(lines[index][1]) 
    distancia = distancia + dados 
}

console.log( distancia )