const BOARD_HEIGHT = 17;
const widths = [1, 2, 3, 4, 13, 12, 11, 10, 9, 10, 11, 12, 13, 4, 3, 2, 1];
const offsets = [4, 4, 4, 4, 0, 1, 2, 3, 4, 4, 4, 4, 4, 9, 10, 11, 12];
let pawn;

let fields = new Array(BOARD_HEIGHT);
for (let i = 0; i < BOARD_HEIGHT; i++) {
    fields[i] = new Array(BOARD_HEIGHT);
    for (let j = 0; j < widths[i]; j++) {
        fields[i][j + offsets[i]] = 'gray';
    }
}

window.addEventListener('load', addGreenPawns);
window.addEventListener('load', addYellowPawns);
window.addEventListener('load', addBluePawns);
window.addEventListener('load', addWhitePawns);
window.addEventListener('load', addBlackPawns);
window.addEventListener('load', addRedPawns);
window.addEventListener("load", function () {
    draw(fields);
});

function draw(tab) {
    for (let i = 0; i < 17; i++) {
        let line = document.createElement('div');
        line.setAttribute("id", "line" + i);
        line.setAttribute("class", "line");
        document.getElementById('star').appendChild(line);
        for (let j = 0; j < widths[i]; j++) {
            let field = document.createElement('div');
            field.setAttribute('class', 'field ' + tab[i][j + offsets[i]]);
            let y = offsets[i] + j;
            field.setAttribute("id", i + "," + y);
            field.addEventListener("click", function () {
                click(this.id);
                movePawn(pawn, this.id);
            });
            document.getElementById('line' + i).appendChild(field);
        }
    }
    console.log(fields);
}

function click(id) {
    let color = colorToHex(window.getComputedStyle(document.getElementById(id), null)['backgroundColor']);
    if (pawn === id) {
        document.getElementById(pawn).classList.remove('clicked');
        pawn = null;
    } else if (color !== '#808080') {
        if (pawn != null) {
            document.getElementById(pawn).classList.remove('clicked');
        }
        pawn = id;
        document.getElementById(id).classList.add('clicked');
    }
}

function addGreenPawns() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j <= i; j++) {
            //let y = offsets[i] + j;
            //let id = i + "," + y;
            //document.getElementById(id).classList.add('green');
            fields[i][j + offsets[i]] = 'green';
        }
    }
}

function addYellowPawns() {
    for (let i = 13; i < 17; i++) {
        for (let j = 0; j < widths[i]; j++) {
            //let y = offsets[i] + j;
            //let id = i + "," + y;
            //document.getElementById(id).classList.add('yellow');
            fields[i][j + offsets[i]] = 'yellow';
        }
    }
}

function addBluePawns() {
    for (let i = 4; i < 8; i++) {
        for (let j = 0; j < 8 - i; j++) {
            //let y = offsets[i] + j;
            //let id = i + "," + y;
            //document.getElementById(id).classList.add('blue');
            fields[i][j + offsets[i]] = 'blue';
        }
    }
}

function addWhitePawns() {
    for (let i = 4; i < 8; i++) {
        for (let j = 9; j <= 16 - i; j++) {
            //let y = offsets[i] + j;
            //let id = i + "," + y;
            //document.getElementById(id).classList.add('white');
            fields[i][j + offsets[i]] = 'white';
        }
    }
}

function addBlackPawns() {
    for (let i = 9; i < 13; i++) {
        for (let j = 0; j < widths[i - 9]; j++) {
            //let y = offsets[i] + j;
            //let id = i + "," + y;
            //document.getElementById(id).classList.add('black');
            fields[i][j + offsets[i]] = 'black';
        }
    }
}

function addRedPawns() {
    for (let i = 9; i < 13; i++) {
        for (let j = 9; j < widths[i]; j++) {
            //let y = offsets[i] + j;
            //let id = i + "," + y;
            //document.getElementById(id).classList.add('red');
            fields[i][j + offsets[i]] = 'red';
        }
    }
}

function movePawn(pawn, destination) {
    if (pawn != null && pawn !== destination) {
        let coordsDest = destination.split(',');
        let coordsPawn = pawn.split(',');

        fields[coordsDest[0]][coordsDest[1]] = document.getElementById(pawn).classList[1];
        fields[coordsPawn[0]][coordsPawn[1]] = 'gray';

        document.getElementById(destination).classList.add(document.getElementById(pawn).classList[1]);
        document.getElementById(pawn).classList.remove('clicked');
        document.getElementById(pawn).classList.remove(document.getElementById(pawn).classList[1]);
        pawn = null;
    }
}

function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    let digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);

    let red = parseInt(digits[2]);
    let green = parseInt(digits[3]);
    let blue = parseInt(digits[4]);

    let rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16).padStart(6, '0');
}
