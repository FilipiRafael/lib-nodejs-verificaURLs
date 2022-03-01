const fetch = require('node-fetch')

function manejaErros(erro) {
    throw new Error(erro.message)
}

async function checaStatus(arrayURLs) {
    try {
        const arrayStatus = await Promise
            .all(arrayURLs
                .map(async url => {
                    const res = await fetch(url)
                    return `${res.status} - ${res.statusText}`;
                }))
        return arrayStatus
    } catch (erro) {
        manejaErros(erro)
    }
}

function geraArrayDeURLs(arrayDeLinks) {
    // loop para cada objeto {chave:valor}
    // Object.values(objeto) 
    return arrayDeLinks
        .map(objeto => Object
            .values(objeto).join())
}

async function validaURLs(arrayLinks) {
    const links = geraArrayDeURLs(arrayLinks)
    const statusLinks = await checaStatus(links)
    const resultados = arrayLinks
        .map((object, index) => ({
            ...object,
            status: statusLinks[index]
        }))

    return resultados
}

module.exports = validaURLs;