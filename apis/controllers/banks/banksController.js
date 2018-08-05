'use strict';
const fs = require('fs');

exports.list_banks = function (req, res) {

    fs.readFile("static_data/banks.json", 'utf8', function (err, data) {
        if (!data) { /*If the banks file is deleted or all the content is removed, return the blank object*/
            res.send([]);
        }
        res.send(data);
    });

};

