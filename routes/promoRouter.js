import express from "express";
import bodyParser from "body-parser";

const promoRouter = express.Router()
promoRouter.route("/")
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();
})
.get((req, res, next) => {
    res.end("Vou enviar todas promoções para você!")
})
.post((req, res, next) => {
    res.statusCode = 201;
    res.end('Irei adicionar a promocões: ' + req.body.name + ' com os detalhes:' + req.body.description)
 
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('A operação PUT não é permitido em /promos');
})
.delete((req, res, next) => {
    res.statusCode = 204;
    console.log('Deletando todas promoções');
    res.end();
});

promoRouter.route('/:promoId')
.get((req, res, next) => {
    res.end('Vou mandar os detalhes da Promoção: ' + req.params.dishId + ' para você');
})
.put((req, res, next) => {
    res.write('Atualizando a promoção: ' + req.params.dishId + '\n');
    res.end('Ira atualizar a promoção: ' + req.body.name + ' com os detalhes:' + req.body.description);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('A operação POST não é suportada em /promos/' + req.params.promoId);
})
.delete((req, res, next) => {
    res.statusCode = 204;
    res.end();
});

export default promoRouter;