const Cart = require('../../models/Cart');

class ShowAllCart {
    async show(req, res) {

        try {
            const cart = await Cart.find();

            return res.status(200).json(cart);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new ShowAllCart();