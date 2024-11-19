import express, { Application, Request, Response } from 'express';
import cors from 'cors';
const app: Application = express();

const test = 30;
let data = 2;
//parser

app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
