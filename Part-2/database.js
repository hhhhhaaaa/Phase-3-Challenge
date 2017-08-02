const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/grocery_store";
const db = pgp(connectionString);

function productList(searchTerm){
  return db.many((`
    SELECT name, section FROM groceries
    WHERE section = $1;
    `), [searchTerm]);
    pgp.end;
}

function shopperOrders(searchTerm){
  return db.many((`
    SELECT orders.id, SUM(groceries.price) as total_cost FROM orders
    INNER JOIN order_list ON orders.id = order_list.order_id
    INNER JOIN groceries ON groceries.id = order_list.grocery_id
    WHERE orders.shopper_id = $1
    GROUP BY orders.id;
    `), [searchTerm]);
    pgp.end;
}

function realShoppers(){
  return db.many((`
    SELECT shoppers.name as shopper_name, COUNT(*) AS number_of_orders FROM shoppers
    INNER JOIN orders ON shoppers.id = orders.shopper_id
    GROUP BY shoppers.name
    ORDER BY COUNT(*) ASC;
    `), []);
    pgp.end;
}

module.exports = {
  productList,
  shopperOrders,
  realShoppers
}
