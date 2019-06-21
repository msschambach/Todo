module.exports = (sequelize, DataTypes) => {
    const TodoItem = sequelize.define('todoitem', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        text: DataTypes.STRING,
        done: DataTypes.BOOLEAN
    },
        {
            freezeTableName: true,
        }
    );

    return TodoItem;
}