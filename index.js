import express from "express";
import http from "http";
import morgan from "morgan";
import bodyParser from "body-parser";
import dishRoutes from "./routes/dishRouter.js";
import promoRoutes from "./routes/promoRouter.js";


const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRoutes);
app.use('/promos', promoRoutes);


app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is a Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});
