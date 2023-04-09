const fs = require("fs");

const getExp = (req, res) => {
    const exp = require('./data/exp.json')
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(exp))
    console.log('api/exp call')
}

const postExp = (req, res) => {
    console.log(req.body)
    var newData = {
        "job": req.body.job,
        "date": req.body.date,
        "company": req.body.company,
        "adress": req.body.adress,
        "link" : req.body.link
    }
    fs.readFile('./data/exp.json', 'utf-8', function(err, data)
    {
        var obj = JSON.parse(data);
        obj.push(newData);
        var strObj = JSON.stringify(obj);
        fs.writeFile('./data/exp.json', strObj, function(err)
        {
            if (err)
                return console.log(err);
            console.log('Data added in experience');
        })
    })
}


module.exports = {
    getExp,
    postExp
}