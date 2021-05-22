var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '))
const tamanho = parseInt(lines[0][0])

for(let index = 1; index <= tamanho; index++ ){
    if( parseInt(lines[index][1]) === 0 ){
        console.log('divisao impossivel')
    }else{
        console.log( parseFloat(parseInt(lines[index][0]) / parseInt(lines[index][1])).toFixed(1) )
    }
}