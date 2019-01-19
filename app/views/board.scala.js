let BOARD_HEIGHT = 17

class Field {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

let widths = [1, 2, 3, 4, 13, 12, 11, 10, 9, 10, 11, 12, 13, 4, 3, 2, 1];
let offsets = [4, 4, 4, 4, 0, 1, 2, 3, 4, 4, 4, 4, 4, 9, 10, 11, 12];
let offsetDraw = [7, 6, 6, 5, 1, 1, 2, 2, 3, 2, 2, 1, 1, 5, 6, 6, 7];

/*
let fields = new Array(BOARD_HEIGHT);
for (let i = 0; i < BOARD_HEIGHT; i++) {
  fields[i] = new Array(widths[i]);
  for (let j = 0; j < widths[i]; j++) {
    fields[i][j + offsets[i]] = new Field(i, j + offsets[i]);
  }
}
*/

function draw() {
  for (let i = 0; i < 17; i++) {
    let line = document.createElement('div');
    line.setAttribute("id", "line" + i);
    line.setAttribute("class", "line");
    if (i % 2 == 1) {
      line.style.marginLeft = '20px';
    }
    document.getElementById('board').appendChild(line);
    for (let j = 0; j < 17; j++) {
      if (j <= offsetDraw[i] || j > offsetDraw[i] + widths[i]) {
        let field = document.createElement('div');
        field.setAttribute('class', 'empty');
        document.getElementById('line' + i).appendChild(field);
      } else {
        let field = document.createElement('div');
        field.setAttribute('class', 'field');
        document.getElementById('line' + i).appendChild(field);
      }
    }
  }
}
