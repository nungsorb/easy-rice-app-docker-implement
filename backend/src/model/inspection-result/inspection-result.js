import { Schema } from 'mongoose';
import connection from '../../db/connection.js';

const InspectionResultSchema = new Schema({
  inspectionId: { type: String, required: true },
  resultPath: { type: String, required: true },
});

export const InspectionResult = connection.model('InspectionResult', InspectionResultSchema);