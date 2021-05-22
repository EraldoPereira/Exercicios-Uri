var input = require('fs').readFileSync('stdin', 'utf8');

var codigo = parseInt(input.split(" "))

if(codigo === 61){
    console.log('Brasilia')
}else if (codigo === 71){
    console.log('Salvador')
}else if(codigo === 11){
    console.log('Sao Paulo')
}else if (codigo === 21){
    console.log('Rio de Janeiro')
}else if (codigo === 32){
    console.log('Juiz de Fora')
}else if( codigo === 19 ){
    console.log('Campinas')
}else if(codigo === 27){
    console.log('Vitoria')
}else if(codigo === 31){
    console.log('Belo Horizonte')
}else{
    console.log('DDD nao cadastrado')
}
