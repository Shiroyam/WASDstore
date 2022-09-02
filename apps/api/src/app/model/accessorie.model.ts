import mongoose, { Schema } from 'mongoose';

const AccessorieSchema = new Schema({
  title: { type: String, require: true },
  text: { type: String },
  price: { type: String },
  img: { type: Array },
  titleImg: { type: String },
});

const AccessorieModel = mongoose.model('Accessorie', AccessorieSchema);
export default AccessorieModel;
