import mongoose, { Schema } from 'mongoose';

const MouseSchema = new Schema({
  title: { type: String, require: true },
  text: { type: String },
  img: { type: Array },
  titleImg: { type: String },
  price: { type: String },
});

const MouseModle = mongoose.model('Mouse', MouseSchema);
export default MouseModle;
