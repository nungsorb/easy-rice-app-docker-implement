import { Schema } from 'mongoose';
import AutoIncrement from '../../db/auto-increment-factory.js';
import connection from '../../db/connection.js';
import standards from './standards.json' with { type: 'json' };
import util from 'util';

export const StandardDataSchema = new Schema({
  key: { type: String, required: true },
  name: { type: String, required: true },
  conditionMax: { type: String, enum: ['LT', 'LE', 'GT', 'GE', 'EQ', 'NE'], default: null },
  conditionMin: { type: String, enum: ['LT', 'LE', 'GT', 'GE', 'EQ', 'NE'], default: null },
  shape: [{ type: String, enum: ['wholegrain', 'broken'], required: true }],
  maxLength: { type: Number, default: null },
  minLength: { type: Number, default: null },
});

const StandardSchema = new Schema({
  name: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  standardData: { type: [StandardDataSchema], required: true } 
});

StandardSchema.plugin(AutoIncrement, { inc_field: 'id' });
export const Standard = connection.model('Standard', StandardSchema);

export async function initStandardCollection() {
  const data = await Standard.find({});
  if (data.length === 0) {
    console.log('initStandardCollection');
    await Standard.insertMany(standards);
    console.log(console.log(util.inspect(standards, false, null, true /* enable colors */)));
  } else {
    console.log('standardCollectionAlreadyInit');
  }
}