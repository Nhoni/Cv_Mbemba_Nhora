import React from 'react'
import Nav from '../Components/Nav'
import Skills from '../Components/Skills'
import Footer from '../Components/Footer'

function Competences() {
    return (
        <>
        <header>
          <Nav />
        </header>

        <main    style={{marginLeft: '2rem'}}>

        <h1 style={{marginTop:'6rem'}}>Compétences</h1>
            <Skills />
        </main>

        <footer>
            <Footer />
        </footer>
        </>
    )
}

export default Competences;
        