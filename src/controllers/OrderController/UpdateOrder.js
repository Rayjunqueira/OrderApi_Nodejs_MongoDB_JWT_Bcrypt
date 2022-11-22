const Order = require('../../models/Order');

class UpdateOrder {
    async update(req, res) {
        const { id } = req.params;
        const { list, totalAmount, payment, address } = req.body;

        try {
            await Order.findByIdAndUpdate(id, {
                list: list,
                totalAmount: totalAmount,
                payment: payment,
                address: address,
            });

            return res.status(200).json('Order updated!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new UpdateOrder();
