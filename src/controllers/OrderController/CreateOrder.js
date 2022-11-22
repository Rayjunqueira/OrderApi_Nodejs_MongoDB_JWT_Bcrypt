
const Order = require('../../models/Order');

class CreateOrder {
    async create(req, res) {
        const { list, totalAmount, payment, address, addressNote } = req.body;

        try {
            const order = await Order.create({
                list,
                totalAmount,
                payment,
                address,
                addressNote
            });

            return res.status(200).json(order);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new CreateOrder();