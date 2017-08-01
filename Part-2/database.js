const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/grocery_store";
const db = pgp(connectionString);

function productList(searchTerm){
  return db.many((`
    SELECT * FROM grocery
    WHERE section = $1
    `), [searchTerm]);
}

function shoppersOrders(searchTerm){
  return db.many((`
    SELECT * FROM orders
    WHERE shopperID = $1
    `), [searchTerm]);
}

function realShoppers(searchTerm){
  return db.many((`
    SELECT * FROM shoppers
    WHERE section = $1
    `), [searchTerm]);
}
