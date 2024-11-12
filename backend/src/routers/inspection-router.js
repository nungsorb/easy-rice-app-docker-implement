import express from 'express';
import { generateInspectionId, Inspection } from '../model/inspection/inspection.js';
import Multer from '../config/multer-config.js';
import { getCurrentLocalTime } from '../util/time.js';

const router = express.Router();

router.get('/history', async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const { fromDate, toDate, inspectionId, page } = req.query;
    
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

    const limit = 10;
    const offset = ((page ? Number(page) : 1) - 1) * limit;
    const results = await Inspection.find(
      criteria, 
      { standardData: 0 }, 
      { skip: offset, limit }
    ).sort({ _id: -1 });
    const totalDocuments = await Inspection.estimatedDocumentCount();
    res.status(200).send({ data: results, totalDocuments });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'something went wrong.'});
  }
});

router.get('/history/:id', async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const { id: inspectionId } = req.params;
    const result = await Inspection.findOne({ inspectionId });
    res.status(200).send({ data: result });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'something went wrong.'});
  }
});

router.post('/history', Multer.single('file'), async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const inspectionData = req.body;
    inspectionData.inspectionId = await generateInspectionId();
    if (req.file) {
      console.log(req.file.destination, req.file.filename)
      inspectionData.resultPath = `${req.file.destination}${req.file.filename}`;
    }
    await Inspection.create(inspectionData);
    res.status(201).send({ data: inspectionData });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
});

router.put('/history/:id', async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const { id: inspectionId } = req.params;
    const filter = { inspectionId };
    const update = req.body;
    update.samplingDate = getCurrentLocalTime(update.samplingDate);
    update.updateDate = getCurrentLocalTime();

    const data = await Inspection.findOneAndUpdate(filter, update);
    res.status(201).send({ data });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: err });
  }
});

router.delete('/history', async (req, res) => {
  console.log(`${req.originalUrl}`);
  try {
    const { inspectionId } = req.body;
    await Inspection.deleteOne({ inspectionId });
    res.status(200).send({ data: inspectionId });
  } catch (err) {
    console.log(err);
    res.status(400).send({ message: 'something went wrong.'});
  }
});

export default router;