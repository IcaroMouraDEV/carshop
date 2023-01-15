import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import Routes from './Routes/Routes';

const app = express();

app.use(express.json());
app.use(Routes);

app.use(ErrorHandler);

export default app;
