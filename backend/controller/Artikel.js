import Artikel from "../models/ArtikelModel.js";

export const getArtikel = async(req, res) => {
    try {
        const artikel = await Artikel.findAll({
            attributes:['id', 'judul', 'isiArtikel', 'updatedAt']
        });
        res.json(artikel);
    } catch (error) {
        console.log(error);
    }
}

export const addArtikel = async(req, res) => {
    const { judul, isiArtikel } = req.body;
    try {
        await Artikel.create({
            judul: judul,
            isiArtikel: isiArtikel,
        });
        res.json({msg: "Artikel Berhasil ditambahkan"});
    } catch (error) {
        console.log(error);
    }
}