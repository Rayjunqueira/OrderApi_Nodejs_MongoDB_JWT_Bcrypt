const Cart = require('../../models/Cart');

class UpdateCart {
    async update(req, res) {
        const { id } = req.params;
        const { name, note, quantity, price } = req.body;

        try {
            await Cart.findByIdAndUpdate(id, {
                name: name,
                note: note,
                quantity: quantity,
                price: price,
            });

            return res.status(200).json('Cart updated!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new UpdateCart();
