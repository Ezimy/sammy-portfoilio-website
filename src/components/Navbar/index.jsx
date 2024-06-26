import { Link, NavLink } from 'react-router-dom';
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser, faFile, faCode } from '@fortawesome/free-solid-svg-icons';
import Initials from '../../assets/images/initials.png'
function Navbar() {
    return(
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Initials} alt='SY.'/>
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" className="link home" to="/">
                    <FontAwesomeIcon icon={faHome} color='#224870' className='fa-icon'/>
                    <span className="hover-text">Home</span>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="link about" to="/About">
                    <FontAwesomeIcon icon={faUser} color='#224870'className='fa-icon'/>
                    <span className="hover-text">About</span>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="link contact" to="/Contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#224870'className='fa-icon'/>
                    <span className="hover-text">Contact</span>
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="link resume" to="/Resume">
                    <FontAwesomeIcon icon={faFile} color='#224870'className='fa-icon'/>
                    <span className="hover-text">Resume</span>
                </NavLink>
                <a href='https://github.com/Ezimy/sammy-portfoilio-website.git' target='_blank' className='repo-button'>
                    <FontAwesomeIcon icon={faCode} color='#224870'/> Code
                </a>
            </nav>
        </div>
    )
}
export default Navbar;