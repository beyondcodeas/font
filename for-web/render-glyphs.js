const glyphHouse = document.getElementById('glyphHouse');

const itemsPerRow = 4;
let currentRow = 1;
let tr;
let tdG;
let tdGN;

GLYPHS.forEach((glyph) => {
  if (currentRow === 1) {
    tr = document.createElement('tr');
  }
  tdG = document.createElement('td');
  tdG.classList.add('glyph');
  tdGN = document.createElement('td');
  tdGN.classList.add('glyph-name');

  for (const [key, value] of Object.entries(glyph)) {
    tdG.innerHTML = key;
    tdGN.innerHTML = value;
    tr.appendChild(tdG);
    tr.appendChild(tdGN);
  }
  currentRow = currentRow < itemsPerRow ? currentRow++ : (currentRow = 1);

  // glyphHouse.appendChild(tr);
});
