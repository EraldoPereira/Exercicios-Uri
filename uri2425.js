var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

//numero de caixas
const C = lines[0][0]
//numero de clientes
const N = lines[0].split(' ')[1]
const cliente = []

for( let i = 1; i <= N; i++ ){
    cliente[i-1] = {entrada: lines[i].split(' ')[0], tempo: parseInt(lines[i].split(' ')[1])}
}

for(let i = 0; i < cliente.length; i++){
    
}

//console.log(lines[5].split(' ')[0])
console.log(cliente.length)