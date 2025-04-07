const express = require('express');
const app = express();
const port = 8081;

app.get('/', function(req,res){
    res.send("Bem vindo")
});

app.get('/homepage', function(req, res, next){
    console.log("A resposta está na próxima função.");
    next();
}, (req,res) => {
    res.send("Bem vindo ao Homepage")
});

//Passagem por parâmetro
app.get('/ola/:nome/:sobrenome', function(req,res){
    res.send(`Bem vindo, ${req.params.nome} ${req.params.sobrenome}`);
})

//Passagem por parâmetro usando Query String
//localhost:8081/ola2?nome=Barbara&sobrenome=Lauber
app.get('/ola2', function(req,res){
    const{nome, sobrenome} = req.query
    res.send(`Bem vindo, ${nome} ${sobrenome}`);
});

app.get('/endereco', function(req,res){
    fetch('http://brasilapi.com.br/api/cep/v2/' + "87301-899")
        .then((response) => response.json())
        .then((endereco) =>{
            res.send(`Endereço: ${endereco.street}`);
        })
        .catch(error => {
            console.log("Erro ao acessar o link");
            res.send("Ops, algo deu errado.");
        });
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}...`)
})