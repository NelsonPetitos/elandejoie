const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')
const bodyParser = require('body-parser')

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.set('view engine', 'ejs');

// Point static path to dist
app.use('/assets', express.static(path.join(__dirname, 'public')));

// Catch all other routes and return the index file
app.get('/', (request, response)  => {
    response.render('pages/index');
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


app.get('/about', (request, response)  => {
    response.render('pages/about', {active: 2});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


app.get('/services', (request, response)  => {
    response.render('pages/services', {active: 3});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


app.get('/products', (request, response)  => {
    response.render('pages/products', {active: 4});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.get('/blog', (request, response)  => {
    response.render('pages/blog', {active: 5});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


app.get('/contact', (request, response)  => {
    response.render('pages/contact', {active: 6});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


// Catch all other routes and return the index file
app.get('*', (req, res)  => {
    response.render('pages/index');
    // res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, () => {
    console.log('Server running on port: '+port);
})