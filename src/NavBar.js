import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className="nav-bar">
            <br/>
            <span><a href="#"><b>Adrian</b> Wowk</a></span>
            <ul className="nav-list">
                <li className="active"><a href="#">Services</a></li>
                <li><a href="#">My Projects</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="right-links">
                <a href="#" className="github-link">
                    <FontAwesomeIcon icon={faGithub} className="github-icon"/>    
                    GitHub
                </a>
                <div className="email-icon">
                    <a href="#" className="email-icon-button">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </div>
            </div>
            <br/>
        </nav>
    )
}