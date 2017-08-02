CREATE TABLE groceries (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price DECIMAL,
  section VARCHAR(50)
);

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id SERIAL,
  FOREIGN KEY (shopper_id) REFERENCES shoppers(id)
);

CREATE TABLE order_list (
  grocery_id SERIAL,
  order_id SERIAL,
  FOREIGN KEY (grocery_id) REFERENCES groceries(id),
  FOREIGN KEY (order_id) REFERENCES orders(id)
);
