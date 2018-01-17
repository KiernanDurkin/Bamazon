DROP DATABASE IF EXISTS bamazon_db;

CREATE DATABASE bamazon_db;

USE bamazon_db;



CREATE TABLE Products(
	id INTEGER  AUTO_INCREMENT NOT NULL,
	Product_name VARCHAR(100)  NULL,
	Department_name VARCHAR(100)  NULL,
	price INTEGER  NULL,
	stock_quantity INTEGER(100) NULL,

	PRIMARY KEY (id)
	);



INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Banana","Produce","26","50" );
INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Apples","Produce","20","12" );
INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Peach","Produce","11","100" );
INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Pears","Produce","12","30" );
INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Watermelon","Produce","4","20" );
INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Grapes","Produce","6","44" );
INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Steak","Meats","12","30" );
INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Chicken","Meats","4","20" );
INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Sausage","Meats","6","44" );
INSERT INTO Products (Product_name, Department_name, price, stock_quantity)
VALUES ("Keyboard","Computer","100","6" );