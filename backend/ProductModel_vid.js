import { Sequelize } from "sequelize";
import db from "./Database_vid.js";

const {DataTypes} = Sequelize;

const ProductId = db.define('vid',{
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    url: DataTypes.STRING
}, {
    freezeTableName: true
});

export default ProductId;

(async() =>{
    await db.sync();
})();