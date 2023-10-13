const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new mongoose.Schema({
    _id: {
        type: Schema.Types.ObjectId,
        auto: true,
      },
    name: {
        type: String,
        required: [true, "Name required."],
    },
    // developer: {
    //     type: String,
    //     required: [true, "Developer required."] ,
    // },
    price: {
        type: Number,
        required: [true, "Price required."],
    },
    description: 
    {
        type: String,
        required: [true, "Description required."],
    },
    fileUrl: {
        type: String,
        required: [true, "File required."] ,
    },
    imageUrl: {
        type: String,
        required: [true, "Image required."] ,
    },
    // categories:
    // {
    //     type:[String],
    //     required: [true, "Cathegories required."] ,
    // }
});

const game = mongoose.model('game', gameSchema);

module.exports = game;