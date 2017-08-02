\copy groceries(name, price, section) FROM './grocery.csv' WITH DELIMITER ',' CSV HEADER

INSERT INTO shoppers (name) VALUES ('John');
INSERT INTO shoppers (name) VALUES ('Paul');
INSERT INTO shoppers (name) VALUES ('George');
INSERT INTO shoppers (name) VALUES ('Ringo');
INSERT INTO shoppers (name) VALUES ('Maxwell');

INSERT INTO orders (shopper_id) VALUES (1);
INSERT INTO orders (shopper_id) VALUES (1);
INSERT INTO orders (shopper_id) VALUES (1);
INSERT INTO orders (shopper_id) VALUES (1);
INSERT INTO orders (shopper_id) VALUES (2);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (4);
INSERT INTO orders (shopper_id) VALUES (4);

INSERT INTO order_list(grocery_id, order_id) VALUES (37, 1);
INSERT INTO order_list(grocery_id, order_id) VALUES (22, 1);
INSERT INTO order_list(grocery_id, order_id) VALUES (7, 1);

INSERT INTO order_list(grocery_id, order_id) VALUES (34, 2);
INSERT INTO order_list(grocery_id, order_id) VALUES (35, 2);
INSERT INTO order_list(grocery_id, order_id) VALUES (1, 2);
INSERT INTO order_list(grocery_id, order_id) VALUES (21, 2);
INSERT INTO order_list(grocery_id, order_id) VALUES (18, 2);
INSERT INTO order_list(grocery_id, order_id) VALUES (13, 2);
INSERT INTO order_list(grocery_id, order_id) VALUES (16, 2);
INSERT INTO order_list(grocery_id, order_id) VALUES (6, 2);

INSERT INTO order_list(grocery_id, order_id) VALUES (16, 3);
INSERT INTO order_list(grocery_id, order_id) VALUES (30, 3);
INSERT INTO order_list(grocery_id, order_id) VALUES (37, 3);
INSERT INTO order_list(grocery_id, order_id) VALUES (14, 3);
INSERT INTO order_list(grocery_id, order_id) VALUES (26, 3);
INSERT INTO order_list(grocery_id, order_id) VALUES (29, 3);
INSERT INTO order_list(grocery_id, order_id) VALUES (28, 3);

INSERT INTO order_list(grocery_id, order_id) VALUES (11, 4);

INSERT INTO order_list(grocery_id, order_id) VALUES (38, 5);
INSERT INTO order_list(grocery_id, order_id) VALUES (22, 5);
INSERT INTO order_list(grocery_id, order_id) VALUES (5, 5);
INSERT INTO order_list(grocery_id, order_id) VALUES (2, 5);
INSERT INTO order_list(grocery_id, order_id) VALUES (24, 5);

INSERT INTO order_list(grocery_id, order_id) VALUES (11, 6);
INSERT INTO order_list(grocery_id, order_id) VALUES (38, 6);
INSERT INTO order_list(grocery_id, order_id) VALUES (13, 6);
INSERT INTO order_list(grocery_id, order_id) VALUES (3, 6);
INSERT INTO order_list(grocery_id, order_id) VALUES (22, 6);
INSERT INTO order_list(grocery_id, order_id) VALUES (16, 6);
INSERT INTO order_list(grocery_id, order_id) VALUES (21, 6);

INSERT INTO order_list(grocery_id, order_id) VALUES (34, 7);
INSERT INTO order_list(grocery_id, order_id) VALUES (4, 7);
INSERT INTO order_list(grocery_id, order_id) VALUES (3, 7);

INSERT INTO order_list(grocery_id, order_id) VALUES (18, 8);
INSERT INTO order_list(grocery_id, order_id) VALUES (10, 8);
INSERT INTO order_list(grocery_id, order_id) VALUES (3, 8);
INSERT INTO order_list(grocery_id, order_id) VALUES (24, 8);
INSERT INTO order_list(grocery_id, order_id) VALUES (7, 8);
INSERT INTO order_list(grocery_id, order_id) VALUES (39, 8);
INSERT INTO order_list(grocery_id, order_id) VALUES (19, 8);

INSERT INTO order_list(grocery_id, order_id) VALUES (20, 9);
INSERT INTO order_list(grocery_id, order_id) VALUES (27, 9);
INSERT INTO order_list(grocery_id, order_id) VALUES (37, 9);

INSERT INTO order_list(grocery_id, order_id) VALUES (26, 10);
INSERT INTO order_list(grocery_id, order_id) VALUES (34, 10);
INSERT INTO order_list(grocery_id, order_id) VALUES (37, 10);
INSERT INTO order_list(grocery_id, order_id) VALUES (32, 10);
INSERT INTO order_list(grocery_id, order_id) VALUES (33, 10);
