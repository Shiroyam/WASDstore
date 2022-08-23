import mongoose, { Schema } from "mongoose";

const KeyboardSchema = new Schema ({
    title: {type: String, require: true},
    text: {type: String},
    img: {type: Array},
})

const KeyboardModel = mongoose.model("Keyboard", KeyboardSchema);
export default KeyboardModel;