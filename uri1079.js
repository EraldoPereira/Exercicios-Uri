var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');


for(let i = 0; i < lines[0]; i++){
    numero = lines[ i + 1].split(' ')
    media = ((numero[0] * 2) + (numero[1] * 3) + (numero[2] * 5) ) / 10
    console.log(media.toFixed(1))
}

