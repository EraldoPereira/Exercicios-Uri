var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '))

for(let index = 0; index < lines.length; index++){
    const x = parseInt(lines[index][0])
    const y = parseInt(lines[index][1])
    if( x > 0 && y > 0  ){
        console.log('primeiro')
    }else if( x < 0 && y > 0 ){
        console.log('segundo')
    }else if( x < 0 && y < 0 ){
        console.log('terceiro')
    }else if( x > 0 && y < 0 ){
        console.log('quarto')
    }else{
        return
    }
}