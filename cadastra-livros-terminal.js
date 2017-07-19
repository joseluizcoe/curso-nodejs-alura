var http = require('http');

var env = process.env;

var configuracoes = {
    hostname: env.APP_HOST,
    port: env.APP_PORT,
    path: '/produtos',
    method: 'post',
    headers: {
        'Accept': 'application/json',
        'Content-type':'application/json'
    }
};

var client = http.request(configuracoes, function(res) {
    console.log(res.statusCode);
    res.on('data', function(body) {
        console.log('Corpo: ' + body);
    });
});

var produto = {
    titulo: 'mais sobre node',
    descricao: 'node, javascript e um pouco sobre http',
    preco: '100'
}

client.end(JSON.stringify(produto));
