const User = require('../../models/User');

class ShowAllUser {
    async show(req, res) {

        try {
            const user = await User.find();

            return res.status(200).json(user);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new ShowAllUser ();