var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var gasolina = 0
var alcool = 0
var diesel = 0

for(let index = 0; index < lines.length; index++){
    if( parseInt(lines[index]) === 4 ){
        console.log('MUITO OBRIGADO')
        console.log('Alcool: '+ parseInt(alcool) )
        console.log('Gasolina: '+ parseInt(gasolina) )
        console.log('Diesel: '+ parseInt(diesel) )
        return
    }else if( parseInt(lines[index]) === 1 ){
        alcool++
    }else if( parseInt(lines[index]) === 2 ){
        gasolina++
    }else if( parseInt(lines[index]) === 3 ){
        diesel++
    }
}

