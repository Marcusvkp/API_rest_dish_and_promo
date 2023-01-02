import express from "express";
import bodyParser from "body-parser";

const dishRouter = express.Router();

dishRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("Vou enviar todas refeições para você!")
})
.post((req, res, next) => {
    res.statusCode = 201;
    res.end('Irei adicionar a refeição: ' + req.body.name + ' com os detalhes:' + req.body.description)
 
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('A operação PUT não é permitido em /dishes');
})
.delete((req, res, next) => {
    res.statusCode = 204;
    console.log('Deletando todas refeições');
    res.end();
});

dishRouter.route('/:dishId')
.get((req, res, next) => {
    res.end('Vou mandar os detalhes da refeição: ' + req.params.dishId + ' para você');
})
.put((req, res, next) => {
    res.write('Atualizando a refeição: ' + req.params.dishId + '\n');
    res.end('Ira atualizar a refeição: ' + req.body.name + ' com os detalhes:' + req.body.description);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('A operação POST não é suportada em /dishes/' + req.params.dishId);
})
.delete((req, res, next) => {
    res.statusCode = 204;
    res.end();
});

export default dishRouter;