import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import config from './config/config';
import appRouter from './routes/index.router';
import routeErrHandler from './middlewares/routeErr.middleware';
// import cors
import cors from 'cors';

const app: express.Application = express();
const port = config.port || 5000;
const address = `0.0.0.0:${port}`;

//middleware to parse incomming requests
app.use(bodyParser.json());
// use cors
app.use(cors());

app.get('/', function (req: Request, res: Response) {
  res.send('Welcome to Storefront Backend API');
});

//all routes (users,orders,products)
app.use('/api', appRouter);

app.listen(port, function () {
  console.log(`starting app on: ${address}`);
});

app.use(routeErrHandler);
export default app;
