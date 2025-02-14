/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import cors from 'cors';
import bodyParser from 'body-parser';
import express, { Application } from 'express';
// import globalErrorHandler from './app/middlewares/globalErrorhandler';
// import notFound from './app/middlewares/notFound';
import router from './app/routes';
import notFound from './app/middlewares/notFound';
const app: Application = express();

//parsers
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// application routes

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to the Visit los angeles',
  });
});

app.use('/api/v1', router);

// app.use(globalErrorHandler);

//Not Found
app.use(notFound);

export default app;
