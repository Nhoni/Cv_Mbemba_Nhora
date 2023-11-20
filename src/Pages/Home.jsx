import Footer from "../Components/Footer";
import Nav from "../Components/Nav"
import React, { useState } from 'react';

function Home() {
    const [afficherAccueil, setAfficherAccueil] = useState(true);
    const basculerSection = () => {
    setAfficherAccueil(!afficherAccueil)};

    return (
    <>
      <Nav />
      <div>
      {afficherAccueil ? (
        <div className="content_acc" id="accueil">
          <div className="acceuil-section">
            <div className="accueil-content">
              <h1>MBEMBA Nhora</h1>
              <p className="text_accueil">Développeuse d'applications multimédia Junior  <br />Conceptrice développeuse d'applications Junior</p>
              <button onClick={basculerSection} className="roll-button">
                Qui suis-je ?
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="content_apropos" id="a-propos">
          <h2>A propos de moi</h2>
          <div className="apropos-section">
            <div className="photos-p">
              <img src="src\assets\img\ma_photos.jpg" alt="Mbemba Nhora" style={{ height: '300px' }} />
            </div>
            <p>
              J’ai suivi la formation développeur d'applications multimédias au sein du centre de formation{' '}
              <a style={{ color: '#f3900ec7' }} href="https://alt-rh.com/alt-rh-propose-diverses-formations/developpeur-dapplications-multimedia/" target="_blank" rel="noopener">
                Alt-Rh
              </a>
              . <br /> Suite à cette formation, j’ai eu envie d'en découvrir plus..<br /> <br />
              C'est pourquoi j'ai commencé cette année la formation de concepteur développeur d'applications chez{' '}
              <a style={{ color: '#f3900ec7' }} href="" target="_blank" rel="noopener">
                Prepavenir-formation
              </a>
              .<br />J'aimerais me spécialiser dans le développement front-end.
            </p>
          </div>
        </div>
      )}
    </div>
    <Footer />
    </>
  )
}

export default Home
