var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n').map(item => item.split(' '));

if (parseInt(lines[0]) > parseInt(lines[1])) {
    resto(parseInt(lines[0]), parseInt(lines[1]))
} else {
    resto(parseInt(lines[1]), parseInt(lines[0]))
}

function resto(x, y) {
    for (let index = y; x > index; index++) {
        if (index >= 5) {
            res = index % 5
            if (res == 2 || res == 3) {
                console.log(index);
            }
        }

    }
}

