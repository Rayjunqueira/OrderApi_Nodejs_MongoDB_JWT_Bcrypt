const Cart = require('../../models/Cart');

class FindCart {
    async find(req, res) {
        const { id } = req.params;

        try {
            const cart = await Cart.findById(id);

            return res.status(200).json(cart);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new FindCart();