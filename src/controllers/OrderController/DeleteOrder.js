const Order = require('../../models/Order');

class DeleteOrder {
    async delete(req, res) {
        const { id } = req.params;

        try {
            const order = await Order.findByIdAndDelete(id);

            return res.status(200).json('Order deleted!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new DeleteOrder();
