const { Client } = require('pg');
const express = require('express');

// create an express application
const app = express();
app.use(express.json());
// create a postgresql client
const client = new Client({
    database: 'social-media'
});

// route handlers go here
app.get('/users', (req, res) => {
    client.query('SELECT * FROM users', (err, result) => {
        console.log(result)
        res.send(result.rows);
    });
});

app.post('/users', (req, res) => {
    // sqlActions = 'insert into users (username, bio) values($1,$2) returning *'
    // values = ['javascriptpostnamething', 'this is the bio, maybe, from a js post request']
    console.log(req.body)
    client.query(req.body.sqlActions, [req.body.username, req.body.bio], (err, result) => {
        res.send(result.rows[0]);
    });
});

app.get('/users/:id', (req, res) => {
    let id = req.params.id
    client.query(`SELECT * FROM users where id = ${id}`, (err, result) => {
        console.log(result.rows)
        res.send(result.rows)
    });
});

// start a server that listens on port 3000 and connects the sql client on success
app.listen(3000, () => {
    client.connect();
});

