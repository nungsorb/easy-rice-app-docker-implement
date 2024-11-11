import { Schema } from 'mongoose';
import { StandardDataSchema } from '../standard/standard.js';
import connection from '../../db/connection.js';

const InspectionSchema = new Schema({
  name: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  imageLink: { type: String },
  inspectionId: { type: String, required: true },
  standardId: { type: String, required: true },
  note: { type: String },
  standardName: { type: String, required: true },
  samplingDate: { type: Date },
  samplingPoint: [{ type: String, enum: ['Front End', 'Back End', 'Other'] }],
  price: { type: Number, default: 0, min: 0, max: 100_000 },
  standardData: { type: [StandardDataSchema], required: true }
});

export const Inspection = connection.model('Inspection', InspectionSchema);

export async function generateInspectionId() {
  try {
    const lastInspection = await Inspection.findOne({}).sort({ _id: -1 });

    if (lastInspection) {
      const inspectionIdParts = lastInspection.inspectionId.split('-');
      const idNumber = parseInt(`${inspectionIdParts[1]}${inspectionIdParts[2]}`);
      const newIdNumber = String(idNumber + 1).padStart(8, '0');

      return `EC-${newIdNumber.slice(0, 4)}-${newIdNumber.slice(4)}`;
    }

    return 'EC-0000-0000';
  } catch (err) {
    console.error(err);
  }
}