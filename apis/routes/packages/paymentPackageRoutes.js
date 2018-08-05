'use strict';

module.exports = function(app) {

    let packageCtrl = require('../../controllers/packages/paymentPackagesController');
    //Route for listing packages
    app.route('/packages')
        .get(packageCtrl.list_packages);

};
