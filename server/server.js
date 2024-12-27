const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000; // You can change this to any port number you prefer

// Middleware to parse JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Endpoint to log data
app.post('/log', (req, res) => {
    console.log('Received data:');
    console.log(req.body); // Logs the data sent in the request body
    res.status(200).send('Data received and logged!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
