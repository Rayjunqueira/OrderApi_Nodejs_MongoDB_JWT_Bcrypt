const User = require('../../models/User');

const bcrypt = require('bcryptjs');

class UpdateUser {
    async update(req, res) {
        const { id } = req.params;
        const { name, email, password } = req.body;

        try {

            const user = await User.findOne({ id: id });

            if (!user) {
                return res.status(401).json('User does not exist');
            } 

            const hashPassword = bcrypt.hashSync(password, 8);

            await User.findByIdAndUpdate(id, {
                name: name,
                email: email,
                password: hashPassword,
            });

            return res.status(200).json('User updated!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new UpdateUser();
