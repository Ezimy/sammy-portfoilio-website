import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
function Footer(){
    return(
        <footer>
            <h3>Designed and Developed by Sammy Yang</h3>
            <ul className='socials'>
                    <li>
                        <a 
                        href='https://www.linkedin.com/in/sammy-yang29/'
                        rel='norefferer'
                        target='_blank'
                        >
                            <FontAwesomeIcon icon={faLinkedin} color='#224870'/>
                        </a>
                    </li>
                    <li>
                        <a 
                        href='github.com/Ezimy/'
                        rel='norefferer'
                        target='_blank'
                        >
                            <FontAwesomeIcon icon={faGithub} color='#224870'/>
                        </a>
                    </li>
                    <li>
                        <a 
                        href='www.youtube.com/@sammyyang5549'
                        rel='norefferer'
                        target='_blank'
                        >
                            <FontAwesomeIcon icon={faYoutube} color='#224870'/>
                        </a>
                    </li>
            </ul>
        </footer>
    )
}
export default Footer;