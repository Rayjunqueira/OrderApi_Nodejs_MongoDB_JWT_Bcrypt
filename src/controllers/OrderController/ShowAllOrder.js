const Order = require('../../models/Order');

class ShowAllProduct {
    async show(req, res) {

        try {
            const order = await Order.find({}).populate({
                path: 'list',
                model: 'Cart',
                populate: {
                    path: 'name',
                    model: 'Item',
                    select: 'name',
                }
            }).lean();

            return res.status(200).json(order);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new ShowAllProduct();