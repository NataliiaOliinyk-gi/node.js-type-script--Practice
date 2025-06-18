import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";

const Genre = sequelize.define(
    "genre", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: "Genre with name already exist"
        }
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        defaultValue: "http://google.com",
        allowNull: false
    }
}
)

// Genre.sync({alter: true});

export default Genre;