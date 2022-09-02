import mongoose, { Schema } from 'mongoose';

const BrandSchema = new Schema({
  type: { type: String, require: true },
  name: { type: String, require: true },
  keyboard: { type: [Schema.Types.ObjectId], ref: 'Keyboard' },
  mouse: { type: [Schema.Types.ObjectId], ref: 'Mouse' },
  audio: { type: [Schema.Types.ObjectId], ref: 'Audio' },
  accessorie: { type: [Schema.Types.ObjectId], ref: 'Accessorie' },
});

const BrandModel = mongoose.model('Brand', BrandSchema);
export default BrandModel;
