// par nome/valor
const saudacao = 'Opa' // contecto léxico 1

function exec(){
    const saudacao = 'Falaa' // contecto léxico 2
    return saudacao
}



// Objectos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereço: {
        logradouro: 'Rua Muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)