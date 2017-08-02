const chai = require('chai');
const expect = require('chai').expect
const database = require('../database.js');

describe('commands', function(){
  describe('product-list', function(){
    it('Should list all results under section dairy', function(done){
      database.productList("dairy")
      .then(
        function(groceryResults) {
        expect(groceryResults).to.eql([{ name: 'Butter', section: 'dairy' }, { name: 'Cheese', section: 'dairy' }, { name: 'Cream Cheese', section: 'dairy' }, { name: 'Eggs', section: 'dairy' }, { name: 'Milk', section: 'dairy' }, { name: 'Sour Cream', section: 'dairy' }, { name: 'Yogurt', section: 'dairy' } ]);
        done();
      })
      .catch(function(error){return done(error)})});
  });
  describe('shoppers-orders', function(){
    it('Should list all shopper Johns orders and totals', function(done){
      database.shopperOrders("1")
      .then(
        function(orderResults) {
        expect(orderResults).to.eql([{ id: 1, total_cost: '26.30' }, { id: 2, total_cost: '92.85' }, { id: 3, total_cost: '63.42' }, { id: 4, total_cost: '1.47' } ]);
        done();
      })
      .catch(function(error){return done(error)})});
  });
  describe('real-shoppers', function(){
    it('Should list all shoppers that have orders', function(done){
      database.realShoppers()
      .then(
        function(shopperResults) {
        expect(shopperResults).to.eql([{ shopper_name: 'Paul', number_of_orders: '1' }, { shopper_name: 'Ringo', number_of_orders: '2' }, { shopper_name: 'George', number_of_orders: '3' }, { shopper_name: 'John', number_of_orders: '4' } ]);
        done();
      })
      .catch(function(error){return done(error)})});
  });
});
