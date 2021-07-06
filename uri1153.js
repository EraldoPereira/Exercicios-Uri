var input = require('fs').readFileSync('dev/stdin', 'utf8');
var n = parseInt(input)
var fatorial = 1;
if (n > 0 && n < 13) {
    for (let index = 1; index <= n; index++) {
        fatorial = index * fatorial
    }
    console.log(fatorial);
}