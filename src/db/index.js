const Sequelize = require('sequelize');
const TodoItemModel = require('./models/todoitem');

const [
    DB_USER,
    DB_PASS,
    DB_NAME,
    DB_HOST,
    DB_PORT
] = [
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    process.env.DB_NAME,
    process.env.DB_HOST,
    process.env.DB_PORT
];

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    port: DB_PORT,
    host: DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

const TodoItem = TodoItemModel(sequelize, Sequelize)

module.exports = {
    TodoItem,
    sequelize
}