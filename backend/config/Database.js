import { Sequelize } from "sequelize";

const db = new Sequelize('tes_mandiri', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})

export default db;