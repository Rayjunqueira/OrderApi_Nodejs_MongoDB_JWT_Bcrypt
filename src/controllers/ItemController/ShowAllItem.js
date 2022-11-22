const Item = require('../../models/Item');

class ShowAllItem {
    async show(req, res) {

        try {
            const item = await Item.find();

            return res.status(200).json(item);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new ShowAllItem();