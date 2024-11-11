import express from 'express';

const router = express.Router();

router.get('/history', async (req, res) => {
  console.log(`${req.originalUrl}`);
  res.status(200).send({ message: 'no history.' });
});

export default router;