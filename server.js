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
    console.log('Route : home');
    response.render('pages/index', {active: 1});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


app.get('/about', (request, response)  => {
    console.log('Route : about');
    response.render('pages/about', {active: 2});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


app.get('/services', (request, response)  => {
    console.log('Route : services');
    response.render('pages/services', {active: 3});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


app.get('/products', (request, response)  => {
    console.log('Route : products');
    response.render('pages/products', {active: 4});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});

app.get('/blog', (request, response)  => {
    console.log('Route : blog');
    response.render('pages/blog', {active: 5});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


app.get('/contacts', (request, response)  => {
    console.log('Route : contacts');
    response.render('pages/contact', {active: 6});
    // res.sendFile(path.join(__dirname, 'pages/index.html'));
});


// Catch all other routes and return the index file
app.get('*', (request, response)  => {
    console.log('Route : default');
    response.render('pages/index', {active: 1});
    // res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.listen(port, () => {
    console.log('Server running on port: '+port);
})