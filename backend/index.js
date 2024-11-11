import './load-environment.js';
import bodyParser from 'body-parser';
import connection from './src/db/connection.js';
import cors from 'cors';
import express from 'express';
import inspectionRouter from './src/routers/inspection-router.js';
import standardRouter from './src/routers/standard-router.js';

import './src/db/init-data.js';

const port = process.env.PORT;
const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors());

app.use('/', inspectionRouter);
app.use('/', standardRouter);

app.get('/health', (req, res) => {
  console.log(`${req.originalUrl}`);
  res.json({ 
    message: 'this is cors-enabled for all origins!',
    DBConnectionState: connection.readyState
  });
});

app.listen(port, () => {
  console.log(`cors-enabled web server listening on port ${port}`);
});