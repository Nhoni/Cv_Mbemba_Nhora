import Nav from "../Components/Nav"

function Home() {
    return (
    <>
      <Nav />
      <div className="content_acc"id="accueil">
        <div id="accueil"  className="acceuil-section">
            <h1>MBEMBA Nhora</h1>
            <p className="text_accueil"> Développeuse d'application multimédia Junior et <br /> Conceptrice  développeuse d'application </p>
            <a href="#a-propos" className="roll-button">Qui-suis je ?</a>
        </div>
    </div>
    </>
  )
}

export default Home
