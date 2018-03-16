module.exports = function(sequelize, DataTypes) {
    var EventPost = sequelize.define("EventPost", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        zip: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 5]
            }
        },
        time: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1, 750]
            }
        }
    });

    return EventPost;
};