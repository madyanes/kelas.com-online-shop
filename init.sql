CREATE DATABASE online_shop;
USE online_shop;
-- Users Table
CREATE TABLE Users(
  id INT AUTO_INCREMENT,
  email VARCHAR(50) UNIQUE,
  password VARCHAR(255),
  CONSTRAINT pk_user PRIMARY KEY(id)
);
-- Membuat tabel Products
CREATE TABLE Products (
  product_id INT AUTO_INCREMENT PRIMARY KEY,
  product_name VARCHAR(255),
  price DECIMAL(10, 2),
  product_description TEXT,
  product_image VARCHAR(255),
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
-- Membuat tabel Orders
CREATE TABLE Orders (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  order_date DATE,
  order_status VARCHAR(50),
  total_price DECIMAL(10, 2),
  order_number VARCHAR(20),
  shipping_address TEXT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP
);
-- Membuat tabel Carts
CREATE TABLE Carts (
  cart_id INT AUTO_INCREMENT PRIMARY KEY,
  product_id INT,
  quantity INT,
  order_id INT,
  created_at TIMESTAMP,
  updated_at TIMESTAMP,
  FOREIGN KEY (product_id) REFERENCES Products(product_id),
  FOREIGN KEY (order_id) REFERENCES Orders(order_id)
);
-- Contoh data dalam tabel Products
INSERT INTO Products (
    product_name,
    price,
    product_description,
    product_image,
    created_at,
    updated_at
  )
VALUES (
    'Produk 1',
    19.99,
    'Deskripsi Produk 1',
    'produk1.jpg',
    NOW(),
    NOW()
  );
INSERT INTO Products (
    product_name,
    price,
    product_description,
    product_image,
    created_at,
    updated_at
  )
VALUES (
    'Produk 2',
    29.99,
    'Deskripsi Produk 2',
    'produk2.jpg',
    NOW(),
    NOW()
  );
-- Contoh data dalam tabel Orders
INSERT INTO Orders (
    order_date,
    order_status,
    total_price,
    order_number,
    shipping_address,
    created_at,
    updated_at
  )
VALUES (
    '2023-10-15',
    'Dalam Proses',
    79.95,
    'ORDER123',
    'Alamat Pengiriman 1',
    NOW(),
    NOW()
  );
INSERT INTO Orders (
    order_date,
    order_status,
    total_price,
    order_number,
    shipping_address,
    created_at,
    updated_at
  )
VALUES (
    '2023-10-15',
    'Selesai',
    99.99,
    'ORDER456',
    'Alamat Pengiriman 2',
    NOW(),
    NOW()
  );
-- Contoh data dalam tabel Carts
INSERT INTO Carts (
    product_id,
    quantity,
    order_id,
    created_at,
    updated_at
  )
VALUES (1, 2, 1, NOW(), NOW());
INSERT INTO Carts (
    product_id,
    quantity,
    order_id,
    created_at,
    updated_at
  )
VALUES (2, 3, 1, NOW(), NOW());
