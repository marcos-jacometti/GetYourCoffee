const {dbConnection} = require('./dbConnection');

// Create a table
const createTableQuery = `
    CREATE TABLE IF NOT EXISTS orders (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        phone VARCHAR(100),
        code VARCHAR(100),
        city VARCHAR(100),
        street VARCHAR(100)
    )
`;

dbConnection.query(createTableQuery, (err, results) => {
    if(err){
        console.error(err);
        return;
    }
    console.log("Table created!", results);
});

dbConnection.end();