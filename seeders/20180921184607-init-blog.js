const timestamp = new Date();

module.exports = {
  up: queryInterface => queryInterface.bulkInsert('blog', [{
    id: 1, title: 'blog title 1', tag: 'tag1;tag2;tag3', count: 34, content: '# test title ## subtitle', user_id: 1, created_at: timestamp, updated_at: timestamp,
  }, {
    id: 2, title: 'blog title 2', tag: 'tag1;tag2', count: 20, content: '# test title ## subtitle', user_id: 2, created_at: timestamp, updated_at: timestamp,
  }, {
    id: 3, title: 'blog title 3', tag: 'tag1', count: 14, content: '# test title ## subtitle', user_id: 1, created_at: timestamp, updated_at: timestamp,
  }]),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('blog', {
    id: { [Sequelize.Op.in]: [1, 2, 3] },
  }, {}),
};
