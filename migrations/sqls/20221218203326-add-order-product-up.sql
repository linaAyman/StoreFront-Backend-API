CREATE TABLE orders_products (
    id SERIAL PRIMARY KEY NOT NULL,
    quantity INT DEFAULT 1,
    order_id BIGINT REFERENCES orders(id) ON DELETE SET NULL,
    product_id BIGINT REFERENCES products(id) ON DELETE SET NULL
    );
