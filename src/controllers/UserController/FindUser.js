const User = require('../../models/User');

class FindUser {
    async find(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findById(id);

            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new FindUser();