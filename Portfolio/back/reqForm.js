const fs = require("fs");

const getForm = (req, res) => {
    const form = require('./data/formation.json')
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(form))
    console.log('api/formation call')
};

const postForm = (req, res) => {
    console.log(req.body)
    var newData = {
        "job": req.body.name,
        "adress": req.body.adress,
        "date": req.body.date,
        "school": req.body.school
    }
    fs.readFile('./data/formation.json', 'utf-8', function(err, data)
    {
        var obj = JSON.parse(data);
        obj.push(newData);
        var strObj = JSON.stringify(obj);
        fs.writeFile('./data/formation.json', strObj, function(err)
        {
            if (err)
                return console.log(err);
            console.log('Data added in formation');
        })
    })
};

module.exports = {
    getForm,
    postForm
};