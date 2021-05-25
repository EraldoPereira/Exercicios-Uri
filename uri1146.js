var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => parseInt(item.split(' ')));
var valor = '';

for (let index = 0; index < lines.length; index++) {
    if (lines[index] !== 0) {
        for (let i = 1; i <= lines[index]; i++) {
            valor = valor + i + " "
        }
        console.log(valor.trim());
        valor = ''
    }else{
        return
    }
}