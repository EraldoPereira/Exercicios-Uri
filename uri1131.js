var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' ').toString());
let inter = 0;
let gremio = 0;
let empates = 0;
for (let index = 0; lines.length > index; index++) {
    if (lines[index].toString().split(',').length == 2) {
        if ( parseInt(lines[index].split(',')[0]) > parseInt(lines[index].split(',')[1]) ) {
            inter++
        } else if ( parseInt(lines[index].split(',')[0]) < parseInt(lines[index].split(',')[1]) ) {
            gremio++
        } else {
            empates++
        }
    } else {
        if (parseInt(lines[index].toString().split(',')) == 1) {
            console.log("Novo grenal (1-sim 2-nao)");
        } else if (parseInt(lines[index].toString().split(',')) == 2) {
            console.log("Novo grenal (1-sim 2-nao)");
            console.log((gremio + inter + empates)+ " grenais");
            console.log("Inter:" + inter);
            console.log("Gremio:" + gremio);
            console.log("Empates:" + empates);
            if (inter > gremio) {
                console.log("Inter venceu mais");
            } else if (inter < gremio) {
                console.log("Gremio venceu mais");
            } else {
                console.log("Nao houve vencedor");
            }
            return
        }
    }
}

