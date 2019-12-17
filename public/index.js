const path = require('path');
const express = require('express');
const app = express();

//define paths for express
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
console.log(viewsPath);
//setup handlebars engine and views location
app.set('views engine', 'hbs'); //telling express/node to use handlebars for templates
app.set('views', viewsPath); //telling node where to find the views

app.get('', async (req, res) => {
    //res.send('Thami like bagels with butter... Or does he?')
    try {
        res.render('index');
    } catch (err) {
        res.status(500).send();
    }
});

app.get('/melkadze', (req, res) => {
    res.send('Choco milk')
});

app.listen(3000, (req, res) => {
    console.log('Port 3000 speaks.');
});