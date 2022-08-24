import mongoose, { Schema } from 'mongoose';

const AudioSchema = new Schema({
  title: { type: String, require: true },
  text: { type: String },
  price: { type: String },
  img: { type: Array },
  titleImg: { type: String },
});

const AudioModel = mongoose.model('Audio', AudioSchema);
export default AudioModel;
