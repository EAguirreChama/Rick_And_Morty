// const http = require('http');
// const { getCharById } = require("./Controllers/getChardByld")
// // const data = require('./Utils/data')

// http
// .createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     // if(req.url.includes('/rickandmorty/character')){
//         const id = req.url.split('/').at(-1)

//     //     // Buscar id dentro de un objeto
//         // const characterFound = data.find((character) => {
//         //     return character.id === +id
//         // })
//     //     res
//     //     .writeHead(200, {"Content-type": "application/json"})
//     //     .end(JSON.stringify(characterFound))
//     // }
//     if(req.url.includes('/rickandmorty/character')){
//         getCharById(res, +id)
//     }
// })
// .listen(3001, "localhost")
const server = require("../src/app");
const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server raised in Port: ${PORT}`)
})