var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '))

for( let i=0; i < lines.length; i++ ){
    if(parseInt(lines[i][0]) > parseInt(lines[i][1]) ){
        console.log('Decrescente')
    }else if ( parseInt(lines[i][0]) < parseInt(lines[i][1]) ){
        console.log('Crescente')
    }else{
        return
    }
}