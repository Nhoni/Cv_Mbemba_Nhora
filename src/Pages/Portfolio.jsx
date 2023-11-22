import React, { useState } from 'react';
import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import '../css/index.css'; 
import { Icon } from '@iconify/react';
const projects = [
    {
        id: 1,
        title: 'Cinemax',
        imageUrl: '../src/assets/img/projects/Cinemax.PNG',
        description: 'Cinemax est une app de recherche de film et permet d\'ajouter une sélection en favoris.',
        siteUrl: 'https://cinemax-inky.vercel.app/',
    },

    {
        id: 2,
        title: 'ReactGpt',
        imageUrl: '../src/assets/img/projects/reactGpt.PNG',
        description: 'React GPT',
        siteUrl: 'https://cda-tp-validation-1.vercel.app/', 
    },

    {
        id: 3,
        title: 'Le site sur lequel vous êtes',
        imageUrl: '../src/assets/img/projects/Mon Portfolio.PNG',
        description: 'Mon portfolio qui retrace mon parcours ainsi que mes expériences, et compéttences que j\'ai pu acquérir au fil du temps',
        siteUrl: 'https://example.com/supakar',
    },

    {
        id: 4,
        title: 'Supakar',
        imageUrl: '../src/assets/img/projects/supakar.PNG',
        description: 'Un app React de personnalisations de voitures',
        siteUrl: 'https://supakar-pmmph9pdx-nhonis-projects.vercel.app/',
    },

    {
        id: 5,
        title: 'Portfolio',
        imageUrl: '../src/assets/img/projects/portfolio_intégration.PNG',
        description: 'Un portfolio',
        siteUrl: 'https://portfolio-iota-one-22.vercel.app/',
    },


];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const openProjectSite = (url) => {
    window.open(url, '_blank');
  };

    return (
    <>
        <Nav />
        <main className='main' style={{ marginTop: '5rem', height: '100vh' }}>
            <div>
                <h1 style={{paddingTop:'0.75rem'}}>Mes Projets</h1>
                <div className="project-container">
                    {projects.map((project) => (
                    <div
                        key={project.id}
                        onClick={() => handleProjectClick(project)}
                        className="project-card">
                        <img src={project.imageUrl} alt={project.title} />
                        <h3>{project.title}</h3>
                    </div>
                    ))}
                </div>
                {selectedProject && (
                    <div className="project-details">
                    <h2>{selectedProject.title}</h2>
                    <img
                        src={selectedProject.imageUrl}
                        alt={selectedProject.title}
                    />
                    <p>{selectedProject.description}</p>
                    {selectedProject.siteUrl && (
                        <button className='btn-portfolio' onClick={() => openProjectSite(selectedProject.siteUrl)}>
                        <Icon icon="solar:link-line-duotone" color="black" width="12" /><br />
                        voir le site
                        </button>
                    )}
                    </div>
                )}
            </div>
        </main>
        <Footer />
    </>
    );
};

export default Portfolio;
