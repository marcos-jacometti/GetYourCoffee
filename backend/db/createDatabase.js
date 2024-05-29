const {connection} = require('./dbConnection');

// Create a db
const createDatabaseQuery = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`;

connection.query(createDatabaseQuery, (err, results) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(results);
});

connection.end();