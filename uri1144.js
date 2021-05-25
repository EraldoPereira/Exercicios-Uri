var input = require('fs').readFileSync('stdin', 'utf8');
var valor = parseInt(input.split('\n'))

if( valor > 1 && valor < 1000){
    for(let index = 1; index <= valor; index++ ){
        console.log( (index), (index * index ), ( ( index * index ) * index ) );
        console.log( (index), (index * index + 1 ), ( ( index * index ) * index + 1) );
    }
}
