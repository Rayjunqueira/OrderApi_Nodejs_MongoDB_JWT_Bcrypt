const Item = require('../../models/Item');

class DeleteItem {
    async delete(req, res) {
        const { id } = req.params;

        try {
            const item = await Item.findByIdAndDelete(id);

            return res.status(200).json('Item deleted!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new DeleteItem();
