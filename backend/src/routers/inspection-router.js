import express from 'express';
import { generateInspectionId, Inspection } from '../model/inspection/inspection.js';

const router = express.Router();

router.get('/history', async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const { fromDate, toDate, inspectionId } = req.query;
    
    const criteria = {};
    if (inspectionId) {
      criteria.inspectionId = inspectionId;
    }

    if (fromDate || toDate) {
      criteria.createDate = {}
      if (fromDate) {
        criteria.createDate.$gte = fromDate;
      }
      if (toDate) {
        criteria.createDate.$lte = toDate;
      }
    }

    const results = await Inspection.find(criteria, { standardData: 0 });
    res.status(200).send({ data: results });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'something went wrong.'});
  }
});

router.get('/history/:id', async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const { id: inspectionId } = req.params;
    const results = await Inspection.findOne({ inspectionId });
    res.status(200).send(results);
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'something went wrong.'});
  }
});

router.post('/history', async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const inspectionData = req.body;
    inspectionData.inspectionId = await generateInspectionId();
    await Inspection.create(inspectionData);
    res.status(201).send({ message: inspectionData });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'something went wrong.'});
  }
});

router.delete('/history', async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const { inspectionId } = req.body;
    await Inspection.deleteOne({ inspectionId });
    res.status(201).send({ message: inspectionId });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'something went wrong.'});
  }
});

export default router;