import { Sequelize } from "sequelize";

const db = new Sequelize('db_lenka','root','',{
    host: 'localhost',
    dialect:"mysql"
});

export default db;