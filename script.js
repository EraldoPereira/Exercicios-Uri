var input = require('fs').readFileSync('stdin', 'utf8');

//var cachorroQuente = {codigo: 1, preco: 4.0}
//var xsalada = {codigo: 2, preco: 4.50}
//var xbacon = {codigo: 3, preco: 5.0}
//var torradaSimple = {codigo: 4, preco: 2.0}
//var refrigerante = {codigo: 5, preco: 1.50}

var [codigo, qtd] = input.split(" ").map(item => parseFloat(item))


var lanche = { cachorro: {
    codigo: 1,
    preco: 4.0,
    nome: 'Cachorro Quente'
}, xsalada:{
    codigo: 2,
    preco: 4.50,
    nome: 'X-salada'
}, xbacon:{
    codigo: 3,
    preco: 5.0,
    nome: 'X-Bacon'
}, torrada: {
    codigo: 4,
    preco: 2.00,
    nome: 'Torrada Simples'
}, refrigerante:{
    codigo: 5,
    preco: 1.50,
    nome: 'Refrigerante'
} }


if(lanche.cachorro.codigo === codigo){
    total = qtd * lanche.cachorro.preco
    console.log('Total: R$ ' + total.toFixed(2))
}
if(lanche.xsalada.codigo === codigo){
    total = qtd * lanche.xsalada.preco
    console.log('Total: R$ ' + total.toFixed(2))
}
if(lanche.xbacon.codigo === codigo){
    total = qtd * lanche.xbacon.preco
    console.log('Total: R$ ' + total.toFixed(2))
}
if(lanche.torrada.codigo === codigo){
    total = qtd * lanche.torrada.preco
    console.log('Total: R$ ' + total.toFixed(2))
}
if(lanche.refrigerante.codigo === codigo){
    total = qtd * lanche.refrigerante.preco
    console.log('Total: R$ ' + total.toFixed(2))
}

