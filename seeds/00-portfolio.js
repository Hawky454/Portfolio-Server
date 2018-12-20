exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('portfolio')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('portfolio').insert([
        {
          firstName: 'David',
          lastName: 'Miller',
          email: 'hawky454@gmail.com',
          reason: 'Just To Say Hi!',
          comment:
            'This is an official test to see if I can properly see the table. This message is not comming from the website.'
        }
      ]);
    });
};
