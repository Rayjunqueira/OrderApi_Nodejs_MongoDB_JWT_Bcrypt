const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();

const OrderRoutes = require('./routes/OrderRoutes');
const UserRoutes = require('./routes/UserRoutes');
const AuthRoutes = require('./routes/AuthRoutes');
const CartRoutes = require('./routes/CartRoutes');
const ItemRoutes = require('./routes/ItemRoutes');

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser());

app.use('/order', OrderRoutes);
app.use('/cart', CartRoutes);
app.use('/item', ItemRoutes);
app.use('/user', UserRoutes);
app.use('/auth', AuthRoutes);

app.use('/', (req, res) => {
    res.status(200).json({ msg: 'API IS ALIVE!' });
})

module.exports = app;