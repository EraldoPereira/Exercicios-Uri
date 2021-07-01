var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = input.split('\n').map( (item) => parseInt(item) )

if( lines[0] >= 1 && lines[0] <= 40 && lines[1] >= 1 && lines[1] <= 40){
    console.log(lines[0]-lines[1]);
}