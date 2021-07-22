CREATE TABLE places (
   id INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,name VARCHAR(225) NOT NULL
  ,description VARCHAR(225)
  ,picture_url VARCHAR(225)
  ,rating INTEGER
  ,creator VARCHAR(225)
  ,creation_date datetime
  ,CONSTRAINT creator FOREIGN KEY (username) REFERENCES users
);