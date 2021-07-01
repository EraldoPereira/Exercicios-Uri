var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n').map((item) => parseInt(item))
for (let index = 1; index <= lines[0]; index++) {
    console.log(lines[index] % 2);
}