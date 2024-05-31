const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/dbConnection');
const orderController = require('./controllers/orderControllers');

const app = express();
app.use(cors());

app.use(express.json());

dbConnection.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log("Connected to the database successfully");
});

app.use('/orders', orderController);

app.get('/', (req, res) => {
    res.send('Node.js server is working');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});