module.exports = app => {
    const customers = require("../controller/customer.controller");

    //route for creating customer
    app.post("/createCustomer", customers.create);
};