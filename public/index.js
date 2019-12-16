const path = require('path');
const express = require('express');
const app = express();

app.get('', (req, res) => {
    res.send('Thami like bagels with butter.')
});

app.get('/melkadze', (req, res) => {
    res.send('Choco milk')
});

app.listen(3000, (req, res) => {
    console.log('Port 3000 speaks');
});