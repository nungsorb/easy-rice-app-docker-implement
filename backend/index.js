import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import inspectionRouter from './src/inspection-controller/index.js';

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(cors());

app.use('/', inspectionRouter);

app.get('/health', (req, res) => {
  console.log(`${req.originalUrl}`);
  res.json({ message: 'this is cors-enabled for all origins!' });
});

app.listen(port, () => {
  console.log(`cors-enabled web server listening on port ${port}`);
});