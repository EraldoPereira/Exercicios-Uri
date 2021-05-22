var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var qtdTestes = parseInt(lines[0])

var rato = {tipo: 'R', qtd: 0}
var sapo = {tipo: 'S', qtd: 0}
var coelho = {tipo: 'C', qtd: 0}

for (let i = 1; i <= qtdTestes; i++){
    
    const tipo = lines[i].split(' ')[1].split('\r')[0]
    const qtd = parseInt(lines[i].split(' ')[0])
    if( tipo == rato.tipo ){
        rato.qtd = rato.qtd + qtd    
    }else if( tipo == sapo.tipo ) {
        sapo.qtd = sapo.qtd + qtd
    }else if( tipo == coelho.tipo ){
        coelho.qtd = coelho.qtd + qtd
    }
}

const total = rato.qtd+sapo.qtd+coelho.qtd
console.log('Total: ' + total + ' cobaias')
console.log('Total de coelhos: ' + coelho.qtd)
console.log('Total de ratos: ' + rato.qtd)
console.log('Total de sapos: ' + sapo.qtd)
console.log('Percentual de coelhos: ' + (( coelho.qtd * 100 ) / total).toFixed(2) + ' %')
console.log('Percentual de ratos: ' + (( rato.qtd * 100 ) / total).toFixed(2) + ' %')
console.log('Percentual de sapos: ' + (( sapo.qtd * 100 ) / total).toFixed(2) + ' %')