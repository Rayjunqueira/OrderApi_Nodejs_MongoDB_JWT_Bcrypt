
const Cart = require('../../models/Cart');

class CreateCart {
    async create(req, res) {
        const { name, note, quantity, price } = req.body;

        try {
            const cart = await Cart.create({
                name,
                note,
                quantity,
                price,
            });

            return res.status(200).json(cart);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new CreateCart ();