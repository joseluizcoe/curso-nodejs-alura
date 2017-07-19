var http = require('http');

var env = process.env;

var configuracoes = {
    hostname: env.APP_HOST,
    port: env.APP_PORT,
    path: '/produtos/json',
    headers: {
        'Accept': 'application/json'
    }
};

http.get(configuracoes, function(res) {
    console.log(res.statusCode);
    res.on('data', function(body) {
        console.log('Corpo: ' + body);
    });
});
