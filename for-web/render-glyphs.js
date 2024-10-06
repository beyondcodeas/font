function renderGlyphs() {
  const tbody = document.getElementById('glyphHouse');

  let tr = document.createElement('tr');

  GLYPHS.forEach((item, index) => {
    const key = Object.keys(item)[0];
    const value = item[key];

    const keyTd = document.createElement('td');
    keyTd.innerHTML = key;
    keyTd.className = 'glyph';
    tr.appendChild(keyTd);

    const valueTd = document.createElement('td');
    valueTd.textContent = value;
    valueTd.className = 'glyph-name';
    tr.appendChild(valueTd);

    if ((index + 1) % 4 === 0) {
      tbody.appendChild(tr);
      tr = document.createElement('tr');
    }
  });

  if (tr.childElementCount > 0) {
    tbody.appendChild(tr);
  }
}

renderGlyphs();
