USE online_shop;
CREATE TABLE Users(
  id INT AUTO_INCREMENT,
  email VARCHAR(50) UNIQUE,
  password VARCHAR(255),
  CONSTRAINT pk_user PRIMARY KEY(id)
);
