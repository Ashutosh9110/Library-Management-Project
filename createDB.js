const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mysql://root:1234@localhost:3306'); // connect to MySQL server without specifying a DB

(async () => {
  try {
    await sequelize.query('CREATE DATABASE IF NOT EXISTS librarydb');
    console.log('✅ Database created or already exists!');
  } catch (error) {
    console.error('❌ Error creating database:', error);
  } finally {
    await sequelize.close();
  }
})();