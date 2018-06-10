const express = require('express')

const app = express()

app.get('/goodbye/:name', (req, res) => {
    res.status(200).send(`Goodbye ${req.params.name}`);
})

app.get('/double/:number', (req, res) => {
    const result = Number(req.params.number) * 2;
    res.status(200).send(`${result }`);
})

app.get('/reverse/:name', (req, res) => {
    const name = req.params.name;
    const reversedName = name.split('').reverse().join('');
    res.status(200).send(`${reversedName}`);
})

app.get('/sum', (req, res) => {
    const num1 = Number(req.query.numOne);
    const num2 = Number(req.query.numTwo);
    const sum = num1 + num2;
    res.status(200).json(sum);
})

app.post('/login', (req, res) => {
    res.status(200).json({
        user: 'test',
        password: 'test'
    })
})

app.listen(8080, () => {
    console.log('Listening on 8080')
})