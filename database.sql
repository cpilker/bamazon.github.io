DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  item_name VARCHAR(45) NOT NULL,
  department VARCHAR(45) NOT NULL,
  price INT NOT NULL,
  stock_quantity Integer(100) NOT NULL,
  PRIMARY KEY (id)
);

-- Insert products into table--
INSERT INTO products (item_name, department, price, stock_quantity)
VALUES ("Ski bindings", "Ski equipment", 125, 5), ("Custom Wool Ski Socks", "Clothing", 30, 5), ("K2 Ski Pants", "Clothing", 325, 20), ("Rockstar Pants", "Clothing", 313, 12), ("Uvex Ski Goggles (Anti-Fog)", "Clothing", 99, 8), ("Nordic Ski Bindings", "Ski equipment", 199, 3), ("Defiance Ski Boots (Molded)", "Ski equipment", 399, 9), ("Atomic Vantage 85 Skis - 2018", "Ski equipment", 999, 19), ("Oakley Ski Googles (sport)", "Clothing", 129, 3), ("ATOMIC
VANTAGE 95 C SKIS 2018", "Ski equipment", 349, 4);

-- select all --
SELECT * FROM products;

