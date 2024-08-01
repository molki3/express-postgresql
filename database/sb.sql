CREATE TABLE Users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO Users (name, email) VALUES ('Manuel', 'manuel@email.com'), ('Mariana', 'mariana@email.com');

SELECT * FROM Users;