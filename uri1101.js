var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '))
var string = ''
var soma = 0

function imprimir(ini, fim) {
    for (let i = ini; i <= fim; i++) {
        string = string + i + ' '
        soma = soma + i
    }
    console.log(string + 'Sum=' + soma)
    string = ''
    soma = 0
}

for (let index = 0; index < lines.length; index++) {
    if (parseInt(lines[index][0]) > 0 && parseInt(lines[index][1]) > 0) {
        if( parseInt(lines[index][0]) > parseInt(lines[index][1])){
            imprimir(parseInt(lines[index][1]), parseInt(lines[index][0]))
        }else{
            imprimir(parseInt(lines[index][0]), parseInt(lines[index][1]))
        }
    } else {
        return
    }
}

//imprimir(parseInt(lines[index][1]), parseInt(lines[index][0]))