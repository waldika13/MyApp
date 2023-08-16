import express from "express";
import { getUsers, Register, Login, Logout } from "../controller/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controller/refreshToken.js";
import { addArtikel, getArtikel } from "../controller/Artikel.js";
 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete ('/logout', Logout);

router.get('/artikel', getArtikel);
router.post('/artikel', addArtikel);
 
export default router;