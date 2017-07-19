module.exports = function(app) {

    var listaProdutos = function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            if (err) {
                res.render('erros/conexao-banco');
            }
            res.format({
                html: function() {
                    res.render('produtos/lista', {lista:results});
                },
                json: function() {
                    res.json(results);
                }
            });
        });

        connection.end();
    }

    app.get('/produtos', listaProdutos);

    app.get('/produtos/json', function(req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.lista(function(err, results) {
            res.json(results);
        });

        connection.end();
    });

    app.get('/produtos/form', function(req, res) {
        res.render('produtos/form',  { validationErrors:{}, produto: {}});
    });

    app.post("/produtos",function(req,res) {
        var produto = req.body;
        console.log(produto);

        var connection = app.infra.connectionFactory();
        var produtosDao = new app.infra.ProdutosDAO(connection);

        var validadorTitulo = req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();
        req.assert('preco','Preco deve ser um número').isFloat();

        var errors = req.getValidationResult();
        if(errors){
            res.render('produtos/form', { validationErrors:errors, produto: produto} );
            return;
        }

        produtosDao.salva(produto,function(erros,resultado){
                res.redirect("/produtos");
        });

        connection.end();

    });
}
