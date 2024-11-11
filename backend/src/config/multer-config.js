import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { getCurrentLocalTime, getTimestamp } from '../util/time.js';

const uploadDirectory = process.env.DATA_UPLOAD_PATH;

if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDirectory);
  },
  filename: (req, file, cb) => {
    cb(null, 'data-' + getTimestamp(getCurrentLocalTime()) + path.extname(file.originalname));
  }
});

const Multer = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024
  }
});

export default Multer;