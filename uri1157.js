var input = require('fs').readFileSync('dev/stdin', 'utf8');
var lines = parseInt(input)

for( let index = 0; index <= lines ; index++ ){
    if( lines % index === 0){
        console.log(index);
    }
}
