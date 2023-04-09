const fs = require("fs");

const getCompt = (req, res) => {
    const compt = require('./data/competence.json')
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(compt))
    console.log('api/compt call')
};

const postCompt = (req, res) => {
    console.log(req.body)
    var newData = {
        "name": req.body.name,
        "description": req.body.description,
        "type": req.body.type,
        "language": req.body.language,
        "img_language": req.body.img_language,
        "subjet": req.body.subjet,
        "link" : req.body.link
    }
    fs.readFile('./data/competence.json', 'utf-8', function(err, data)
    {
        var obj = JSON.parse(data);
        obj.push(newData);
        var strObj = JSON.stringify(obj);
        fs.writeFile('./data/competence.json', strObj, function(err)
        {
            if (err)
                return console.log(err);
            console.log('Data added in competence');
        })
    })
}

module.exports = {
    getCompt,
    postCompt
}