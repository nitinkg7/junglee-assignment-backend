'use strict';
const fs = require('fs');

exports.validateCards = function (req, res) {
    const cardDetails = req.body.card_details;
    fs.readFile("static_data/card_validator.json", 'utf8', function (err, data) {
        if (!data) { /*If the card_validator file is deleted or all the content is removed, return the error response*/
            res.status(401).send({message: "Card could not be processed! Please try again."});
        }
        const parsedData = JSON.parse(data);
        if (cardDetails.card_number === parsedData.card_number && cardDetails.cvv >= parsedData.cvv.start && cardDetails.cvv <= parsedData.cvv.end) {
            res.send({message: "Successful"});
        } else {
            res.status(401).send({message: "Card is invalid! Please try again."});
        }
    });

};

exports.validateBankDetails = function (req, res) {
    const bankDetails = req.body.bank_details;
    fs.readFile("static_data/bank_validator.json", 'utf8', function (err, data) {
        if (!data) { /*If the card_validator file is deleted or all the content is removed, return the error response*/
            res.status(404).send({message: "Sorry this bank account could not be processed! Please try again."});
        }
        const parsedData = JSON.parse(data);
        if (bankDetails.account_id === parsedData.account_id && bankDetails.routing_id === parsedData.routing_id) {
            res.send({message: "Successful"});
        } else {
            res.status(401).send({message: "Credentials are invalid! Please try again."});
        }
    });

};

exports.validateOTP = function (req, res) {
    const otp = req.body.otp;
    fs.readFile("static_data/card_validator.json", 'utf8', function (err, data) {
        if (!data) { /*If the card_validator file is deleted or all the content is removed, return the error response*/
            res.status(404).send({message: "Sorry the OTP could not be verified! Please try again."});
        }
        const parsedData = JSON.parse(data);
        if (otp === parsedData.otp) {
            res.send({message: "Successful"});
        } else {
            res.status(401).send({message: "OTP is invalid! Please try again."});
        }
    });

};