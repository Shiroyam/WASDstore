import mongoose, { Schema } from "mongoose";

const KeyboardSchema = new Schema ({
    title: {type: String, require: true},
    text: {type: String},
    price: {type: String},
    img: {type: Array},
    titleImg: {type: String},
})

const KeyboardModel = mongoose.model("Keyboard", KeyboardSchema);
export default KeyboardModel;