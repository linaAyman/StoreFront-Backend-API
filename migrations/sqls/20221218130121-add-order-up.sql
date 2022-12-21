CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    status VARCHAR(20) DEFAULT 'active',
    user_id INT REFERENCES users(id)
);