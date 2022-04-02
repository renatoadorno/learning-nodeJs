CREATE DATABASE IF NOT EXISTS model_database;

USE model_database;

DROP TABLE IF EXISTS customer;

CREATE TABLE customer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) not null,
    cpf VARCHAR(50) not null,
    email VARCHAR(100) not null,
    password VARCHAR(100) not null
);

INSERT INTO customer (name, cpf, email, password) VALUES ('Goku', '655.859.854-96', 'goku@dbz.com', 'goku123'),
('Naruto', '452.856.854-85', 'naruto@ship.com', 'naruto321'),
('Eren', '657.235.854-74', 'eren@titan.com', 'erenpomba');

SELECT * FROM customer;