function tratatErroELancar(erro) {
    throw new Error(erro.name + '....')
}

function imprimirNomeGritado(obj) {
    try{
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratatErroELancar(e)
    } finally {
        console.log('final')
    }

    

}

const obj = {nome: 'Roberto'}
imprimirNomeGritado(obj)