const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3))
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0,3))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")

console.log(escola.replace(3,'e')) // substitui o 3 por um e
console.log(escola.replace(/\d/,'e')) // substitui todos digitos por um e

//sem o g so substitui a primeira letra
//o g diz que é global, aplica-se a todos
console.log(escola.replace(/\w/g,'e')) // substitui todos digitos e carateres por um e

console.log('Ana,Maria,Pedro'.split(','))
console.log('Ana,Maria,Pedro'.split(/,/))