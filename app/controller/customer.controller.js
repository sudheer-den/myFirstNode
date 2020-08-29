const Customer = require("../model/customer.model");

exports.create = (req, res) => {
    if(!req.body) {
        res.status(400).send({
            message: "body cannot be empty"
        });
    }

    const customer = new Customer({
        email: req.body.email,
        name: req.body.name,
        active: req.body.active
    });

    Customer.create(customer, (err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Could not create customer datils"
            });
        }
        else {
            res.send(data);
        }
    })
};