USE online_shop;
CREATE TABLE Users(
  id INT AUTO_INCREMENT,
  email VARCHAR(50) UNIQUE,
  password VARCHAR(255),
  CONSTRAINT pk_user PRIMARY KEY(id)
);
CREATE TABLE Products(
  id INT AUTO_INCREMENT,
  name VARCHAR(100),
  price DECIMAL(10, 2),
  stock INT,
  created_at datetime,
  updated_at datetime,
  CONSTRAINT pk_product PRIMARY KEY(id)
);
