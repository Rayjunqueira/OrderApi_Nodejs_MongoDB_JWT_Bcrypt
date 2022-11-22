const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connection () {
    const uri = process.env.MONGO_URI;
    const port = process.env.PORT;
    try {
        await mongoose.connect(uri);
        console.log('Connected to database');
        app.listen(port);
        console.log(`Listening on port ${port}`);
    } catch (err) {
        console.log(err);
    }
}

connection();