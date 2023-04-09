const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');

const {getExp, postExp} = require("./reqExp");
const {getCompt, postCompt} = require('./reqCompt');
const {getForm, postForm} = require('./reqForm');
const {signIn, welcome, refresh, logout} = require('./handler');
const Pool = require('pg');

const port = process.env.PORT || 3001;

const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ origin:true, credentials:true }));

app.get("/", (req, res) => {
    pool.query('Select * from test')
        .then(testData => {
            console.log(testData);
            res.send(testData.rows);
        })
    console.log('Default call')
})

app.post("/login", signIn);

app.get("/welcome", welcome);

app.get("/logout", logout);

app.get("/exp", getExp);

app.post("/exp", postExp);

app.get("/compt", getCompt);

app.post("/compt", postCompt);

app.get("/formation", getForm);

app.post("/formation", postForm);


app.listen(port, () => {
    console.log('Server listening on ${port}');
})
 
const pool = new Pool.Pool({
    user: 'mwane',
    host: 'db-server',
    database: 'psql',
    password: 'MWANE',
    dialect: 'postgres',
    port: 5432
});

pool.connect((err, client, release) => {
    if (err) {
        return console.error(
            'Error acquiring client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error(
                'Error executing query', err.stack)
        }
        console.log("Connected to Database !!!!")
    })
})



