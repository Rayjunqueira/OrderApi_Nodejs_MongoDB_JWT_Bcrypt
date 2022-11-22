const User = require('../../models/User');

const bcrypt = require('bcryptjs');

class CreateUser {
    async create(req, res) {
        const { name, email, password } = req.body;

        try {
            const hashedPassword = bcrypt.hashSync(password, 10);

            const userAlreadyExists = await User.findOne({ email: email });

            if (userAlreadyExists) {
                return res.status(400).json('User already exists!');
            }

            const user = await User.create({
                name,
                email,
                password: hashedPassword,
            });

            return res.status(200).json(user);
        } catch (err) {
            return console.log(err);
        }
    }
} 

module.exports = new CreateUser ();