const { Sequelize } = require('sequelize');

// Update these with your actual credentials
const sequelize = new Sequelize({
  database: 'ron_academy',
  username: 'postgres',
  password: 'your_password', // use empty string if no password
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
  logging: console.log
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('✅ Connection established successfully');
    await sequelize.close();
  } catch (error) {
    console.error('❌ Connection failed:', error);
  } finally {
    process.exit();
  }
}

testConnection();