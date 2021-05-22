var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

const fun = (ini, fim) =>{
    var soma = 0
    for(let index=ini; index <= fim; index++ ){
        if( index % 13 !== 0 ){
            soma = soma + index
        }
    }
    console.log(soma)
}

if( parseInt(lines[0]) > parseInt(lines[1]) ){
    fun(parseInt(lines[1]), parseInt(lines[0]))  

}else{
    fun(parseInt(lines[0]), parseInt(lines[1]))
}