var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ').map((item)=>parseInt(item)).filter( (elem, index, arr) => elem > 0 )

let soma = 0

for(let i = 0; i < lines[1]; i++){
    soma = soma + i + lines[0]
}

console.log(soma);