const express = require('express');
const path = require('path');

const app = express();
const port = 4000;

app.use(express.static(path.join(__dirname, 'Assets')));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, '/Assets/Html/Index.html'));
})

app.get('/signin', (request, response) => {
    response.sendFile(path.join(__dirname, '/Assets/Html/SignIn.html'))
})

app.listen(port, (request, response) => {
    console.log('Server started!');
})
