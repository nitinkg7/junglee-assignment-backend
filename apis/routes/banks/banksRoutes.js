'use strict';

module.exports = function(app) {

    let banksCtrl = require('../../controllers/banks/banksController');
    //Route for listing packages
    app.route('/banks')
        .get(banksCtrl.list_banks);

};
