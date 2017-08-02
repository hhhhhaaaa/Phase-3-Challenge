const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/grocery_store";
const db = pgp(connectionString);

function productList(searchTerm){
  return db.many((`
    SELECT * FROM groceries
    WHERE section = $1
    `), [searchTerm]);
}

function shoppersOrders(searchTerm){
  return db.many((`
    SELECT orders.id, SUM(groceries.price) FROM orders
    INNER JOIN order_list ON orders.id = order_list.order_id
    INNER JOIN groceries ON groceries.id = order_list.grocery_id
    WHERE orders.shopper_id = $1
    GROUP BY orders.id;
    `), [searchTerm]);
}

function realShoppers(searchTerm){
  return db.many((`
    SELECT shoppers.name as Shopper_Name, COUNT(*) AS Number_Of_Orders FROM shoppers
    INNER JOIN orders ON shoppers.id = orders.shopper_id
    GROUP BY shoppers.name
    ORDER BY COUNT(*) ASC;
    `), [searchTerm]);
}
