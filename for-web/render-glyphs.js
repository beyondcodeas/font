const GLYPHS = [
  { '&quot;': 'double quotes' },
  { '&apos;': 'single quote (apostrophe)' },
  { '&acute;': 'acute accent' },
  { '&grave;': 'grave accent (backtick)' },
  { '*': 'asterisk' },
  { '&times;': 'multiplication' },
  { '+': 'plus' },
  { '-': 'minus (hyphen)' },
  { '&plusmn;': 'plus minus' },
  { '&divide;': 'division' },
  { '.': 'full stop' },
  { ',': 'comma' },
  { ':': 'colon' },
  { ';': 'semicolon' },
  { '!': 'exclamation mark' },
  { '?': 'question mark' },
  { '¡': 'inverted exclamation' },
  { '¿': 'inverted question' },
  { '&copy;': 'copyright' },
  { '&reg;': 'registered' },
  { '&num;': 'number sign (hash)' },
  { $: 'dollar sign' },
  { '€': 'euro sign' },
  { '%': 'percent' },
  { '(': 'left parenthesis' },
  { ')': 'right parenthesis' },
  { '[': 'left square bracket' },
  { ']': 'right square bracket' },
  { '{': 'left curly bracket' },
  { '}': 'right curly bracket' },
  { '&lt;': 'less-than' },
  { '&gt;': 'greater-than' },
  { '/': 'slash' },
  { '|': 'vertical line' },
  { '\\': 'backslash' },
  { '^': 'caret' },
  { '=': 'equals' },
  { '~': 'tilde' },
  { '≈': 'approximate' },
  { '¨': 'diaeresis' },
  { _: 'underscore' },
  { '§': 'section' },
  { '&deg;': 'degree' },
  { '&amp;': 'ampersand' },
  { '@': 'at' },
  { '&agrave;': 'a grave' },
  { '&aacute;': 'a acute' },
  { '&acirc;': 'a circumflex' },
  { '&atilde;': 'a tilde' },
  { '&auml;': 'a umlaut' },
  { '&Agrave;': 'A grave' },
  { '&Aacute;': 'A acute' },
  { '&Acirc;': 'A circumflex' },
  { '&Atilde;': 'A tilde' },
  { '&Auml;': 'A umlaut' },
  { '&eacute;': 'e acute' },
  { '&egrave;': 'e grave' },
  { '&ecirc;': 'e circumflex' },
  { '&euml;': 'e umlaut' },
  { '&Eacute;': 'E acute' },
  { '&Egrave;': 'E grave' },
  { '&Ecirc;': 'E circumflex' },
  { '&Euml;': 'E umlaut' },
  { '&iacute;': 'i acute' },
  { '&igrave;': 'i grave' },
  { '&icirc;': 'i circumflex' },
  { '&iuml;': 'i umlaut' },
  { '&Iacute;': 'I acute' },
  { '&Igrave;': 'I grave' },
  { '&Icirc;': 'I circumflex' },
  { '&Iuml;': 'I umlaut' },
  { '&ntilde;': 'n tilde' },
  { '&Ntilde;': 'N tilde' },
  { '&ograve;': 'o grave' },
  { '&oacute;': 'o acute' },
  { '&ocirc;': 'o circumflex' },
  { '&otilde;': 'o tilde' },
  { '&ouml;': 'o umlaut' },
  { '&Ograve;': 'O grave' },
  { '&Oacute;': 'O acute' },
  { '&Ocirc;': 'O circumflex' },
  { '&Otilde;': 'O tilde' },
  { '&Ouml;': 'O umlaut' },
  { '&ugrave;': 'u grave' },
  { '&uacute;': 'u acute' },
  { '&ucirc;': 'u circumflex' },
  { '&uuml;': 'u umlaut' },
  { '&Ugrave;': 'U grave' },
  { '&Uacute;': 'U acute' },
  { '&Ucirc;': 'U circumflex' },
  { '&Uuml;': 'U umlaut' },
  { '&yacute;': 'y acute' },
  { '&yuml;': 'y umlaut' },
  { '&Yacute;': 'Y acute' },
];

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
