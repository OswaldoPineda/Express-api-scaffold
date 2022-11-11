const express = require('express')
const app = express()
const path = require('path')
const port = 3000
const bodyParser = require('body-parser');

const pool = require('./db');

app.use(bodyParser.json());

app.get('/tasks', async function(req, res) {});

app.post('/tasks', function(req, res) {});

app.get('/tasks/:id', function(req, res) {});

app.put('/tasks/:id', function(req, res) {});

app.delete('/tasks/:id', function(req, res) {});

app.listen(port, () => console.log(`App listening on port ${port}!`))