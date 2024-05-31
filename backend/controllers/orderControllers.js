const express = require("express");
const router = express.Router();
const { dbConnection } = require('../db/dbConnection');

router.post("/createOrder", (req, res) => {
    const { name, phone, code, city, street } = req.body;
    
    const query = "INSERT INTO orders (name, phone, code, city, street) VALUES (?, ?, ?, ?, ?)";
    const values = [name, phone, code, city, street];

    dbConnection.query(query, values, (error, results) => {
        if (error) {
            console.error('Error inserting order:', error);
            res.status(500).send("Error to create order");
            return;
        }

        res.status(200).send("Order was created successfully");
    });
});

module.exports = router;