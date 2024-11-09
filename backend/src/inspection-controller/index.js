import express from 'express';

const router = express.Router();

router.get('/history', (req, res) => {
  console.log(`${req.originalUrl}`);
  res.status(200).json({ message: 'alive.' });
});

export default router;