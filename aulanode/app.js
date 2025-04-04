const http = require('http');
const assinatura = require('./assinatura');

http.createServer(function(req, res){
    res.end('Hello world!\n\n\n' + assinatura());
}).listen(8081);

console.log('Servidor rodando na porta 8081 ...')