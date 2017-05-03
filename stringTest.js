const platzom = str => {
  let translation = str


  translation = translation.toLowerCase().endsWith('ar') ?
  translation .slice(0, -2) : translation

  translation = translation.toLowerCase().startsWith('z') ?
  `${translation}pe` : translation

  const length = translation.length
  const half = Math.round(length/2)
  translation = length >= 10 ?
  `${translation.slice(0, half)}-${translation.slice(half)}` : translation

  const reverse = str => str.toLowerCase().split('').reverse().join('')
  const minMay = str => str.split('').map(c => str.indexOf(c) % 2 == 0 ? c.toUpperCase()
: c.toLowerCase()).join('')

translation = str == reverse(str) ? minMay(str) : translation

return translation
}


console.log(platzom('Programar'));
console.log(platzom('Zorro'));
console.log(platzom('Zarpar'));
console.log(platzom('abecedario'));
console.log(platzom('sometemos'));
