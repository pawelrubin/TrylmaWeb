function draw() {
  for (let i = 0; i < 17; i++) {
    let line = document.createElement('div');
    line.setAttribute("id", "line" + i);
    line.setAttribute("class", "line");
    if (i % 2 == 0) {
      line.style.marginLeft = '20px';
    }
    document.getElementById('board').appendChild(line);
    for (let j = 0; j < 17; j++) {
      let field = document.createElement('div');
      field.setAttribute('class', 'field');
      document.getElementById('line' + i).appendChild(field);
    }
  }
}
