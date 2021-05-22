var input = require('fs').readFileSync('./stdin', 'utf8');
var lines = parseInt(input.split('\n'))


if(lines > 5 && lines < 2000){const arry =[]
for( let i = 0; i <= lines; i++ ){
    arry[i] = {numero: i, fatorial: i*i}
    if( arry[i].numero % 2 === 0 && arry[i].numero > 0 ){
        console.log(arry[i].numero + "^2 = " + arry[i].fatorial)
    }
}}