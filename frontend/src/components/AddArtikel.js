import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const AddArtikel = () => {
    const [ judul, setJudul ] = useState('');
    const [ isiArtikel, setIsiArtikel ] = useState('');
    const [msg, setMsg] = useState('');
    const navigate = useNavigate();

    const TambahArtikel = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/artikel', {
                judul: judul,
                isiArtikel: isiArtikel,
            });
            navigate("/dashboard");
        } catch (error) {
            if (error.response) {
                setMsg(error.response.data.msg);
            }
        }
    }
  return (
    <div className="container">
            <div className="columns">
                <div className="column is-4-desktop">
                    <button className="button mt-3 is-primary" onClick={() => navigate("/dashboard")}>Back</button>
                    
                    <form onSubmit={ TambahArtikel }>
                    <p className='has-text-centered'>{msg}</p>
                        <div className="field mt-5">
                            <label className='label'>Judul</label>
                            <div className="controls">
                                <input type="text" className='input' placeholder='Judul' value={judul} onChange={(e) => setJudul(e.target.value)} />
                            </div>
                        </div>
                        <div className="field mt-5">
                            <label className='label'>Isi Artikel</label>
                            <div className="controls">
                                <textarea className="textarea input" placeholder="Isi Artikel" value={isiArtikel} onChange={(e) => setIsiArtikel(e.target.value)}></textarea>
                            </div>
                        </div>
                        <div className="field mt-5">
                        <button className='button is-success is-fullwidth'>Tambah Artikel</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
  )
}

export default AddArtikel