const Cart = require('../../models/Cart');

class DeleteCart{
    async delete(req, res) {
        const { id } = req.params;

        try {
            const cart = await Cart.findByIdAndDelete(id);

            return res.status(200).json('Cart deleted!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new DeleteCart();
