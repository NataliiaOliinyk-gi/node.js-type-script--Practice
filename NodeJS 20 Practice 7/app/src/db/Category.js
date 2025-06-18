import { DataTypes } from "sequelize";

import sequelize from "./sequelize.js";


const Category = sequelize.define(
    "category",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            unique: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: {
                args: true,
                msg: "Category with name already exist"
            },
            allowNull: false,
            validate: {
                len: [5],
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [10],
                // len: [50],
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    }
);

// Category.sync();
Category.sync({alter: true}); // обновляет таблицу, если она уже существует
// Category.sync({force: true}); // удаляет таблицу и создает заново пустую с новыми полями


// Category.create({
//     name: "Категория 1",
//     description: "Описание категории"
// });

export default Category;