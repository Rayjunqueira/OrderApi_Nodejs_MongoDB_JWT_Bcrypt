const mongoose = require('mongoose');

const CartSchema = new mongoose.Schema(
    {
        name: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
        },
        note: [{
            type: String,
            required: false,
        }],
        quantity: {
            type: Number,
            required: true,
            default: 1,
        },
        price: {
            type: Number,
            required: false,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    },
    { timestamps: true }
  );
  
module.exports = mongoose.model("Cart", CartSchema);