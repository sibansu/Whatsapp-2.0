import mongoose from "mongoose"

const schema = mongoose.Schema({
    message: String,
    name: String,
    time: String,
    received:Boolean
});

export default mongoose.model('messageContent', schema)