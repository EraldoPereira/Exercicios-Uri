var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = parseInt(input.split('\n'))
if( lines >= 1 && lines <= 1000 ){
    console.log(lines * 4);
}
