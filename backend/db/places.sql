CREATE TABLE places (
   id INTEGER  NOT NULL PRIMARY KEY AUTO_INCREMENT
  ,name VARCHAR(225) NOT NULL
  ,description VARCHAR(225)
  ,picture_url VARCHAR(225)
  ,rating INTEGER
  ,creator VARCHAR(225)
  ,creation_date datetime
  ,latitude VARCHAR(225) NOT NULL
  ,longitude VARCHAR(225) NOT NULL
  ,CONSTRAINT creator FOREIGN KEY (username) REFERENCES users
);

INSERT INTO places (`name`, `description`, `picture_url`, `rating`, `creator`, `creation_date`, `latitude`, `longitude`) VALUES ('Paris', 'Paris is a super place!', 'null', '4', 'me', '2021-07-22', '48.85', '2.35'),

