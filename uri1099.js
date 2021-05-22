var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')
var arry = []
var soma = 0
var tamanho = parseInt(lines[0]) + 1


for (let index = 0; index < lines.length; index++) {
    arry[index] = lines[index].split(' ')
}
function filtar(x, y) {
    for (let i = y; x > i; i++) {
        if (i % 2 === 1 || i%2 === -1) {
            soma = soma + i
        }
    }
    console.log(soma)
    soma = 0
}

for (let index = 1; index < tamanho; index++) {
    if (parseInt(arry[index][0]) > parseInt(arry[index][1])) {
        filtar(parseInt(arry[index][0]), parseInt(arry[index][1]))
    } else if (parseInt(arry[index][0]) < parseInt(arry[index][1])) {
        filtar(parseInt(arry[index][1]), (parseInt(arry[index][0]) + 1))
    } else {
        console.log(soma)
    }

}