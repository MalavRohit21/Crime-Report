const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {timestamps: true});

const Crime = mongoose.model('Crime', reportSchema);

module.exports = Crime;