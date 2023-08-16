import axios from "axios";

export const getArtikel = async () => {
    const artikel = await axios.get('http://localhost:5000/artikel')
    return artikel.data
}