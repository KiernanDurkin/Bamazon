var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;

    start();
});



function start() {


    inquirer.prompt([{

        name: "shop",
        type: "list",
        message: "Have a look at my Wares.",
        choices: ["SHOP", "EXIT"]



    }]).then(function(result) {
        if (result.shop == "SHOP") {
            Store()
        } else {
            console.log("SCRAM!")
            process.exit();
        }

    });


}


function Store() {
    console.log("Products For Sale:");
    console.log("-----------------------");
    connection.query(
        "SELECT * FROM Products;",

        function(err, rows, fields) {
            if (err) throw err;
            for (var i = 0; i < rows.length; i++) {

                console.log(JSON.stringify(rows[i]));
                console.log("---------------------------------");


            }
            selectItem();

        }
    );

}

function selectItem() {

    inquirer.prompt([{

        name: "item",
        type: "input",
        message: "Select an id of the product.",


    }]).then(function(result) {
        connection.query(
            "SELECT * FROM Products WHERE id =" + result.item,
            function(err, rows, fields) {
                if (err) throw err;
                inStock = rows[0].stock_quantity;
                price = rows[0].price;
                itemID = (rows[0].id);


                
                console.log("OK You Selected " + JSON.stringify(rows[0].Product_name) + "\n");

            }
        );


        inquirer.prompt([{

            name: "quan",
            type: "input",
            message: "How many would you like?"

        }]).then(function(result) {

            newQuan = inStock - result.quan;

            if (inStock < result.quan) {
                console.log("Insufficent Quantity!!!!!! ")
                selectItem()
            } else {


                connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + result.quan + ' WHERE id = ' + itemID,

					  function(err, rows, fields) {
                        var totalCost = price * result.quan;
                        console.log("Ok, Your total comes out to $" + totalCost);

                        start();



                    }

                );

            }
        })

    })









}