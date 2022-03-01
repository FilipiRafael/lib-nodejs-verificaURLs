function tratarErro(erro) {
    throw new Error(erro.code, 'Um novo erro foi identificado!')
}

function getUser(userId) {
    const userData = fetch(`https://api.com/api/user/${userId}`)
    .then(response => response.json())
    .then(data => console.log(data.name))
    .catch(error => tratarErro(error))
    .finally(() => console.log('Fim do carregamento!'))
}

getUser(1); 

const endpoints = [
    "https://api.com/api/user/1",
    "https://api.com/api/user/2",
    "https://api.com/api/user/3",
    "https://api.com/api/user/4"
]

const promises = endpoints.map(endpoint => fetch(endpoint).then(response => response.json()))

const promises2 = endpoints.map(url => fetch(url).then(response => response.json()))

Promise.all(promises2)
    .then(body => console.log(body.name))

Promise.all(promises)
    .then(body => console.log(body.name))