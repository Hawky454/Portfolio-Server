const knex = require('./knex');

module.exports = {
  getAll() {
    return knex('portfolio');
  },
  create(portfolio) {
    return knex('portfolio').insert(portfolio, '*');
  },
  delete(id) {
    return knex('portfolio')
      .where('id', id)
      .del();
  }
};
