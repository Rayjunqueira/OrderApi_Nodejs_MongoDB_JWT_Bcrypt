const Order = require('../../models/Order');

class FindCustomer {
    async find(req, res) {
        const { id } = req.params;

        try {
            const order = await Order.findById(id);

            return res.status(200).json(order);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new FindCustomer();
