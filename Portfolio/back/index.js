const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors');
const {getExp, postExp} = require("./reqExp");
const {getCompt, postCompt} = require('./reqCompt');
const {getForm, postForm} = require('./reqForm');

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
    console.log('Default call')
})

app.get("/exp", getExp);

app.post("/exp", postExp);

app.get("/compt", getCompt);

app.post("/compt", postCompt);

app.get("/formation", getForm);

app.post("/formation", postForm);


app.listen(port, () => {
    console.log(`Server listening on ${port}`);
})

