import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Artikel = db.define('artikel',{
    judul:{
        type: DataTypes.STRING
    },
    isiArtikel:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Artikel;