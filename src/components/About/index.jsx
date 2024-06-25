import Typewriter from "typewriter-effect"
import aboutImg from '../../assets/images/profile-image.jpg'
import componentLibraryPreview from '../../assets/images/component-library-preview.PNG'
import colorGeneratorPreview from '../../assets/images/color-generator-preview.PNG'
import quizzicalPreview from '../../assets/images/quizzical.PNG'
import watchlistPreview from '../../assets/images/watchlist-preview.PNG'
import dashboardPreview from '../../assets/images/dashboard-preview.PNG'
import passwordGeneratorPreview from '../../assets/images/password-generator-preview.PNG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faFile } from "@fortawesome/free-solid-svg-icons"
import {
    faHtml5,
    faJsSquare,
    faCss3,
    faReact,
    faJava
  } from '@fortawesome/free-brands-svg-icons';
import { faC } from "@fortawesome/free-solid-svg-icons";
import './index.scss';
import ParticleComponent from '../particles';
import {useInView} from 'react-intersection-observer';
const About =()=>{
    const { ref:heroRef, inView:heroIsVisible} = useInView({
        triggerOnce:true,
        delay: 200
    });
    const { ref:skillsRef, inView:skillsIsVisible} = useInView({
        triggerOnce:true,
        delay: 200
    });
    const { ref:toolsRef, inView:toolsIsVisible} = useInView({
        triggerOnce:true,
        delay: 200
    });
    const { ref:projectsRef, inView:projectsIsVisible} = useInView({
        triggerOnce:true,
        delay: 200
    });
    return(
        <>
            <ParticleComponent id='particles'/>
            <main className="about-page">
                <section className={`about-hero ${heroIsVisible? 'show' : 'hidden'}`} ref={heroRef}>
                    <div className="about-text">
                        <h1>
                            <Typewriter
                                loop={false}
                                onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(2000)
                                    .changeDelay(50)
                                    .typeString("About Me")
                                    .start()
                                }}
                            />
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores error molestiae temporibus voluptatibus. Numquam dolorum ipsa reiciendis explicabo quos praesentium, tempore officia, itaque reprehenderit error in rerum voluptates cupiditate soluta!
                        </p>
                    </div>
                    <img src={aboutImg}/>
                </section>
                <section className={`skills ${skillsIsVisible? 'show' : 'hidden'}`} ref={skillsRef}>
                    <h1>Skills</h1>
                    <div className="icon-grid">
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" className="grid-icon"/>
                            <span className="hover-text">HTML5</span>
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" className="grid-icon"/>
                            <span className="hover-text">CSS</span>
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" className="grid-icon"/>
                            <span className="hover-text">JavaScript</span>
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" className="grid-icon"/>
                            <span className="hover-text">React.js</span>
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faJava} color="#5382a1" className="grid-icon"/>
                            <span className="hover-text">Java</span>
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faC} color="#A8B9CC" className="grid-icon"/>
                            <span className="hover-text">C</span>
                        </div>
                    </div>
                </section>
                <section className={`tools ${toolsIsVisible? 'show' : 'hidden'}`} ref={toolsRef}>
                    <h1>
                        Developer Tools I Use
                    </h1>
                    <div className="icon-grid">
                        <div className="grid-item">      
                            <i className="devicon-eclipse-plain colored grid-icon"></i>
                            <span className="hover-text">Eclipse</span>
                        </div>
                        <div className="grid-item">      
                            <i className="devicon-vscode-plain colored grid-icon"></i>
                            <span className="hover-text">Visual Studio Code</span>
                        </div>
                        <div className="grid-item">      
                            <i className="devicon-windows11-original colored grid-icon"></i>
                            <span className="hover-text">Windows OS</span>
                        </div>
                        <div className="grid-item">         
                            <i className="devicon-github-original colored grid-icon"></i>
                            <span className="hover-text">GitHub</span>
                        </div>
                        <div className="grid-item">                              
                            <i className="devicon-figma-plain colored grid-icon"></i>
                            <span className="hover-text">Figma</span>
                        </div>
                    </div>
                </section>
                <section className={`projects ${projectsIsVisible? 'show' : 'hidden'}`} ref={projectsRef}>
                    <h1>
                        My Projects
                    </h1>
                    <div className="projects-grid">
                    <div className="grid-item">
                            <div className="preview">
                                <img src={componentLibraryPreview} alt="components-library" />
                            </div>
                            <h2>
                                Components Library++
                            </h2>
                            <p>
                                A React project that is a preview of various components styled differently according to different props passed to the component
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Ezimy/components-library" target="_blank">  <FontAwesomeIcon icon={faGithub} className="link-icon"/> GitHub</a>
                                <a href="https://celadon-gelato-7fbb36.netlify.app/" target="_blank">  <FontAwesomeIcon icon={faFile} className="link-icon"/> Demo</a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="preview">
                                <img src={quizzicalPreview} alt="quizzical-preview" />
                            </div>
                            <h2>
                                quzzical
                            </h2>
                            <p>
                                A React project that generates a quiz with questions generated from a form
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Ezimy/quizzical_project" target="_blank"> <FontAwesomeIcon icon={faGithub} className="link-icon"/> GitHub</a>
                                <a href="https://unique-kheer-67caf2.netlify.app/" target="_blank"> <FontAwesomeIcon icon={faFile} className="link-icon"/> Demo</a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="preview">
                                <img src={watchlistPreview} alt="watchlist-preview" />
                            </div>
                            <h2>
                                Movie Watchlist
                            </h2>
                            <p>
                                A Javascript project that lets you search for movies that are fetched from omdbapi to add to a Watchlist that has movies stored in local storage
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Ezimy/movie_watchlist_project" target="_blank"> <FontAwesomeIcon icon={faGithub} className="link-icon"/> GitHub</a>
                                <a href="https://splendorous-semolina-82b3ed.netlify.app/" target="_blank"> <FontAwesomeIcon icon={faFile} className="link-icon"/>Demo</a>
                            </div>
                        </div>
                        <div className="grid-item">
                            <div className="preview">
                                <img src={colorGeneratorPreview} alt="color-generator-preview" />
                            </div>
                            <h2>
                                color scheme generator
                            </h2>
                            <p>
                                a simple Javascript project that fetchs from thecolorapi.com to generate a color scheme
                            </p>
                            <div className="project-links">
                                <a href="https://github.com/Ezimy/color-scheme-generator" target="_blank"> <FontAwesomeIcon icon={faGithub} className="link-icon"/> GitHub</a>
                                <a href="https://musical-sorbet-6c7be5.netlify.app/" target="_blank"> <FontAwesomeIcon icon={faFile} className="link-icon"/>Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="more-projects">
                            More Projects Coming Soon
                    </div>
                </section>
            </main>
        </>
    )
}
export default About;