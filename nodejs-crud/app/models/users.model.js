module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {

        username: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        hash_password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
    return Users;
};