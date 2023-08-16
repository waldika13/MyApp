import expres from 'express';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import router from './routes/index.js';
// import Users from './models/UserModel.js';
// import Artikel from './models/ArtikelModel.js';
dotenv.config();

const app = expres();

try {
    await db.authenticate();
    console.log('Database Connected...')
    // await Users.sync();
    // await Artikel.sync();
} catch (error) {
    console.error(error)
}

app.use(cors({ credentials: true, origin:'http://localhost:3000' }))
app.use(cookieParser());
app.use(expres.json());
app.use(router);

app.listen(5000, () =>  {
    console.log('server running port 5000')
})