const Item = require('../../models/Item');

class UpdateItem {
    async update(req, res) {
        const { id } = req.params;
        const { name, price, img, desc } = req.body;

        try {
            await Item.findByIdAndUpdate(id, {
                name: name,
                price: price,
                img: img,
                desc: desc,
            });

            return res.status(200).json('Item updated!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new UpdateItem();
