const chalk = require('chalk');
const { Console } = require('console');
const fs = require('fs');

function extraiLinks(texto) {
    const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm
    const arrayResultados = []
    let temp;
    while ((temp = regex.exec(texto)) !== null) {
        arrayResultados.push({ [temp[1]] : temp[2] })
    }
    return arrayResultados.length === 0 ? chalk.red('não há links') : arrayResultados ;
}

function tratarErro(error) {
    throw new Error(chalk.red(error.code, 'Por algum motivo específicado na stack-trace, não foi possível ler o arquivo.'))
}

async function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding) 
        return extraiLinks(texto)
    } catch (error) {
        tratarErro(error)
    }
}

module.exports = pegaArquivo;