import express from 'express';
import { Standard } from '../model/standard/standard.js';

const router = express.Router();

router.get('/standard', async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const results = await Standard.find({});
    res.status(200).send({ data: results });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'something went wrong.'});
  }
});

export default router;