const User = require('../../models/User');

class DeleteUser{
    async delete(req, res) {
        const { id } = req.params;

        try {
            const user = await User.findByIdAndDelete(id);

            return res.status(200).json('User deleted!');
        } catch (err) {
            return res.status(500).json(err);
        }
    }
} 

module.exports = new DeleteUser();
