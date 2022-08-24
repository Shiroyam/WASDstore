import mongoose, { Schema } from 'mongoose';

const MouseSchema = new Schema({
  title: { type: String, require: true },
  text: { type: String },
  img: { type: Array },
  imgTitle: { type: String },
  price: { type: String },
});

const MouseModle = mongoose.model('mouse', MouseSchema);
export default MouseModle;
