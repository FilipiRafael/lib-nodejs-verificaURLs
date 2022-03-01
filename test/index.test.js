const pegaArquivo = require('../index')

const arrayResult = [
    {
        FileList: "https://developer.mozilla.org/pt-BR/docs/Web/API/FileList"
    }
]

describe('pegaArquivo::', () => {
    it('Deve ser uma função', () => {
        expect(typeof pegaArquivo).toBe('function')
    })
    it('Deve retornar um Array de resultados', async () => {
        const resultado = await pegaArquivo("C:\workspace\formacao-nodejs\nodejs-criandoAPrimeiraLib\lib-markdown\test\arquivos\texto2.md")
        expect(resultado)
        .toEqual(arrayResult)
    })
    it('Deve retornar mensagem "não há links"', async () => {
        const resultado = await pegaArquivo("C:\workspace\formacao-nodejs\nodejs-criandoAPrimeiraLib\lib-markdown\test\arquivos\texto2.md")
        expect(resultado)
        .toBe("não há links")
    })
})