'use strict';

module.exports = function(app) {

    let paymentCtrl = require('../../controllers/payment-validation/paymentValidationController');
    //Route for validating payments
    app.route('/validate_card')
        .post(paymentCtrl.validateCards);

    app.route('/validate_bank_details')
        .post(paymentCtrl.validateBankDetails);

    app.route('/validate_otp')
        .post(paymentCtrl.validateOTP);

};
