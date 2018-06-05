# bamazon.github.io
## Purpose
* This program utilizes node functionalities to engage a MySQL database to allow users to order products that are inventory.

## *How to Use*
* Customers must have installed inquirer & MySQL. 
    * Customers must have installed dotenv as well and have an associated password. 
    * You will notice that the required password is listed as *process.env.password*; however, the associated file is not part of the upload in GitHub.

* Upon downloading the modules, use the following commands.
    * Open Git Bash.
    * Initialize all modules (MySQL, inquirer, dotenv *or manually input your password in the bamazonCustomer.js* file)
    * Commands:
        * node bamazonCustomer.js
            * This will diplay available products (10), pulled from MySQL
        * Program asks you to type in the # of the product you would like to purchase

**INITIAL QUESTION**
![first image](/Assets/initial_question.jpg)

   *  After selection, program prompts you to pick a quantity. 
        *  **If you select more than one, the program will automatically calculate the total cost**. 
        *  **If you select one, it will read the price of the single product.** 
        *  **If you select more than available, the program returns that you have requested too many and you should submit a request later.**

**SELECT A QUANTITY**
![second image](https://github.com/cpilker/bamazon.github.io/Assets/order_quantity.jpg)

**ORDERED TOO MANY**
![too many](https://github.com/cpilker/bamazon.github.io/Assets/OverStock.PNG)


