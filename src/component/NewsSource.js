import React, {Component} from 'react';
import news from './img/news.png';
import '../css/news.css';

class NewsSource extends Component{
    render() {
        return(
            <div className="container">
                <div className="container news-container">
                    <img src={news} alt="Bloomberg Prediksi Corona RI Baru Beres 10 Tahun Lagi"/>
                </div>
                <p>Sumber berita: <a href="https://health.detik.com/berita-detikhealth/d-5365921/bloomberg-prediksi-corona-ri-baru-beres-10-tahun-lagi-ini-kata-pakar-idi" rel="noreferrer" target="_blank">
                    <span>detik health</span>
                </a>
                </p>
            </div>
        );
    }
}

export default NewsSource;