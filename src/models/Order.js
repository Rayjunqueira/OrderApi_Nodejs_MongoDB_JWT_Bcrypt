const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema(
    {
        list: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Cart',
        }],
        totalAmount: {
            type: Number,
            required: true,
        },
        payment: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        addressNote: {
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
  
module.exports = mongoose.model("Order", OrderSchema);