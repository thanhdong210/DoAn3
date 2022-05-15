const mongoose = require('mongoose');

const ModelSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    action: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "NewAction"
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Models', ModelSchema);