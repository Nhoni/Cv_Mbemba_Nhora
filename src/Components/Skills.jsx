import React from 'react'

function Skills() {
    return (
        <>
        <div className="content_competences" id="competences">
        <h2>Compétences</h2>
        <div  className="competences-section">

            <div className="photos-p">
                <img className="projet_image_cv" src="src\assets\img\cv_photo.PNG" alt="Mbemba Nhora" style={{ height: '300px' }}></img>
            </div>

            <div id="bar_front">
                <p><strong>Front-end</strong></p>
                <label for="file">HTML</label>
                <progress id="file_" max="100" value="70">70%</progress>
                <label for="file">Css</label>
                <progress id="file_" max="100" value="70">70%</progress>
                <label for="file">Js</label>
                <progress id="file_" max="100" value="40">40%</progress>

                <p><strong>Back-end</strong></p>
                <label for="file">Symfony</label>
                <progress id="file_" max="100" value="40">40%</progress>
                <label for="file">Php</label>
                <progress id="file_" max="100" value="30">30%</progress>

                <p><strong>infographie UI UX</strong></p>
                <label for="file">Canva</label>
                <progress id="file_" max="100" value="70">70%</progress>
                <label for="file">Figma</label>
                <progress id="file_" max="100" value="60">50%</progress>
                <label for="file">Adobe XD</label>
                <progress id="file_" max="100" value="50">50%</progress>
            </div>
        </div>

        <a href = "./img/ressources/MBEMBA_Nhora_Developpeuse_d'application_multimédia.pdf" Download = "">
                <button className="roll-button" type = "button">Télécharger mon cv</button>
        </a>

	</div> 
        </>
        
    )
}
export default Skills;