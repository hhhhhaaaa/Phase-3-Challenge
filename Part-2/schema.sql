CREATE TABLE groceries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price INTEGER,
  selection VARCHAR(50)
);
-- Created for us

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);
-- 5 people

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id SERIAL,
  FOREIGN KEY (shopper_id) REFERENCES shoppers(id)
);
-- 1-3 orders per person

CREATE TABLE order_list (
  grocery_id SERIAL PRIMARY KEY,
  order_id SERIAL,
  FOREIGN KEY (grocery_id) REFERENCES groceries(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);
-- 5-10 items per order
