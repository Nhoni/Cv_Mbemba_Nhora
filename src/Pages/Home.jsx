import About from "../Components/About";
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
       <About />
      )}
    </div>
    <Footer />
    </>
  )
}

export default Home
