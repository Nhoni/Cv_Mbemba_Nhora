import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>
        <a href="https://www.linkedin.com/in/nhora-mbemba-b878b2207" target="_blank"><iconify-icon icon="grommet-icons:linkedin"  style={{ color: 'white', width: '32px', height: '32px' }}></iconify-icon></a>
        <a href="https://github.com/Nhoni" target="_blank"><iconify-icon icon="openmoji:github" width="32" height="32"></iconify-icon></a>
        
        <p id="copyright" style={{ color: '#fff' }}>© Copyright 2023 - MBEMBA Nhora. Tous droits réservés.</p>
    </footer>
    )
}
export default Footer