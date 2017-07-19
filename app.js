var app = require('./config/express')();

app.listen(process.env.APP_PORT, function() {
    console.log("servidor rodando");
});