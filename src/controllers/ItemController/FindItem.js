const Item = require('../../models/Item');

class FindItem {
    async find(req, res) {
        const { id } = req.params;

        try {
            const item = await Item.findById(id);

            return res.status(200).json(item);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new FindItem();