exports.up = function(knex, Promise) {
  return knex.schema.createTable('portfolio', function(table) {
    table.increments();
    table.string('firstName');
    table.string('lastName');
    table.string('email');
    table.string('reason');
    table.string('comment');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('portfolio');
};
