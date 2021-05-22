var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '))
const tamanho = parseInt(lines[0])
var lata = 0
var copo = 0
var coposQuebrados = 0


for( let index = 1; index <= tamanho; index++ ){
    lata = parseInt(lines[index][0])
    copo = parseInt(lines[index][1])

    if( lata > copo){
        coposQuebrados = coposQuebrados + copo
    }

}

console.log(coposQuebrados)