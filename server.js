const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors=require('cors');

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(cors({origin:true,credentials: true}));
const packagesRoute = require('./apis/routes/packages/paymentPackageRoutes'); //Importing routes
packagesRoute(app); //Registering the route

const banksRoute = require('./apis/routes/banks/banksRoutes'); //Importing routes
banksRoute(app); //Registering the route

const paymentRoutes = require('./apis/routes/payment-validation/paymentValidationRoutes');
paymentRoutes(app);

app.use(function (req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Junglee payment backend server started on: ' + port);
