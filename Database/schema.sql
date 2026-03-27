CREATE DATABASE vegetable_store;

USE vegetable_store;

CREATE TABLE vegetables (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price INT
);

INSERT INTO vegetables (name, price) VALUES
('Tomato', 20),
('Potato', 30),
('Carrot', 40);
