const express = require('express');
const { dbConnection } = require('./db/dbConnection');
const orderController = require('./controllers/orderControllers');

const app = express();

app.use(express.json());

dbConnection.connect((err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("Connection was a success");
  });

app.use('/orders', orderController);

app.get('/', (req, res) => {
    res.send('Node.js server is working');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running ${PORT}`);
});