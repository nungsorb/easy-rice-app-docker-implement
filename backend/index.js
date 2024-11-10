import './load-environment.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import initDBConnection from './src/db/connection.js';
import inspectionRouter from './src/routers/inspection-router.js';
import mongoose from 'mongoose';

const port = process.env.PORT;
const app = express();

initDBConnection();
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use('/', inspectionRouter);

app.get('/health', (req, res) => {
  console.log(`${req.originalUrl}`);
  res.json({ 
    message: 'this is cors-enabled for all origins!',
    DBConnectionState: mongoose.connection.readyState
  });
});

app.listen(port, () => {
  console.log(`cors-enabled web server listening on port ${port}`);
});