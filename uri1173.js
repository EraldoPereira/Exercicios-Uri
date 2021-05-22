var input = require('fs').readFileSync('stdin', 'utf8');
const valor = parseInt(input)
var array = new Array(10)
array[0] = valor

for(let index = 0; index < 10; index++){
    console.log('N[' + index + '] = ' + array[index])
    array[index+1] =  array[index] * 2
}

