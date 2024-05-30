const express = require("express");
const router = express.Router();

router.post("/createOrder", async (req, res) => {
    try {
        const {name, phone, code, city, street} = req.body;

        await dbConnection.query("INSERT INTO orders (name, phone, code, city, street) VALUES (?, ?, ?, ?, ?)", [name, phone, code, city, street]);

        res.status(200).send("Order was create");
    } catch(error) {
        console.error(error);
        res.status(500).send("Error to create order");
    }
});

module.exports = router;