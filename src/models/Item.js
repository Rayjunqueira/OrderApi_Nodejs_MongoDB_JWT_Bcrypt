const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        img: {
            type: String,
            required: false,
        },
        desc: {
            type: String,
            required: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    { timestamps: true }
  );
  
module.exports = mongoose.model("Item", ItemSchema);