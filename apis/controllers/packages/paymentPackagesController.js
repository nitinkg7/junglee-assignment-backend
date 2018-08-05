'use strict';
const fs = require('fs');

exports.list_packages = function (req, res) {

    fs.readFile("static_data/payment_packages.json", 'utf8', function (err, data) {

        if (!data) { /*If the packages file is deleted or all the content is removed, return the blank array*/
            res.send([]);
        }
        res.send(data);
    });

};

