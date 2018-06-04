require("dotenv").config();

var mysql = require("mysql");
var inquirer = require("inquirer");
var columnify = require("columnify")
var offeringArr = []
//var offeringPrice = []


// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: process.env.password,
  database: "bamazon_db"
});


connection.query("SELECT * FROM products", function(err, res) {
      
      if (err) throw err;
      //For loop for publishing results to array (object) and display the available products
      for (var i = 0; i < res.length; i++) {
        //console.log(res[i].id + " | " + res[i].item_name + " | " + res[i].price + " | ");
        offeringArr.push({id: res[i].id, name: res[i].item_name, price: res[i].price, stock: res[i].stock_quantity})
      };
        
      console.log(columnify(offeringArr))
      console.log('\n')
      
      purchaseOrder(res)
  });

function purchaseOrder(res) {
  inquirer.prompt([
    {
      name: "item",
      type: "input",
      message: "Type in the number of the item you would like to purchase",
      //choices: offeringArr
    },
    {
      name: "quantity",
      type: "input",
      message: "How many would you like to purchase?"
    }
  ]).then(answer => {
    //console.log(answer.item)
    var selection;
    for (var i= 0; i < res.length; i++) {
      if (res[i].id == parseInt(answer.item)) { 
        selection = res[i];
      };
    };
    //console.log(selection.stock_quantity)

    if (answer.quantity > parseInt(selection.stock_quantity)) {
      console.log("You have requested more than are available in stock. Please submit your order at a later date, or order submit an order with a lower quantity.");
      console.log('----------');
    }
    else {
      console.log("Your order will be shipped within 48 hours. We apologize we are not Amazon and do not guarantee immediate shipping; thus, we saved you on the cost of the goods and we won't ask you to confirm your purchase. You already paid us!");
      console.log("Your total price will be: $" + (selection.price * parseInt(answer.quantity)) + ".00" + '\n');
      
      //UPDATE DATABASE TABLE
      connection.query("UPDATE products SET ? WHERE ?", 
        [
          {
            stock_quantity: selection.stock_quantity - answer.quantity
          },
          {
            id: selection.id
          }
        ], function(error) {
          if (error) throw error;
          console.log("Bid place successfully!")
        });
      end()
    }
  });
}

function end() {
  connection.query("SELECT * FROM products", function(err, res) {
      
    if (err) throw err;
    //For loop for publishing results to array (object) and display the available products
    offeringArr = []
    for (var i = 0; i < res.length; i++) {
      //console.log(res[i].id + " | " + res[i].item_name + " | " + res[i].price + " | ");
      
      offeringArr.push({id: res[i].id, name: res[i].item_name, price: res[i].price, stock: res[i].stock_quantity})
    };
      
    console.log(columnify(offeringArr))
    console.log('\n')
    
    connection.end()
  })
}