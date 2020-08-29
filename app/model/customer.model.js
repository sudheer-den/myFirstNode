const sql = require("./db");

//create constructor
const Customer = function(customer) {
    this.name = customer.name;
    this.email = customer.email;
    this.active = customer.active;
};

Customer.create = (newCustomer, result) => {
    sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
        if (err) {
            console.log("error:", err);
            result(null, err);
            return;
        }

        console.log("created customer", { id: res.insertId, ...newCustomer});
        result(null, {id: res.insertId, ...newCustomer});
    });
}

module.exports = Customer;