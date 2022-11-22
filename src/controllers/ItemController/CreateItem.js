
const Item = require('../../models/Item');

class CreateItem {
    async create(req, res) {
        const { name, price, img, desc } = req.body;

        try {
            const item = await Item.create({
                name,
                price,
                img,
                desc,
            });

            return res.status(200).json(item);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new CreateItem();