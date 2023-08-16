import React, { useEffect, useState } from 'react';
import { getArtikel } from './Api';

const Artikel = () => {
    const [artikel, setArtikel] = useState([]);

    useEffect(() => {
        getArtikel().then((result) => {
            setArtikel(result);
        });
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('id-ID', options);
    };

    const ArtikelList = () => {
        return artikel.map((artikel, i) => {
            return (
                <div key={i}>
                    <div className="card mt-5">
                        <div className="card-content">
                            <div className="media is-4by3">
                                <div className="media-content">
                                    <p className="title is-4">{artikel.judul}</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>{artikel.isiArtikel}</p>
                                <time>{formatDate(artikel.updatedAt)}</time>
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    return (
        <div className="card-container">
            <ArtikelList />
        </div>
    );
};

export default Artikel;
