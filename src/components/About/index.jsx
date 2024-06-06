import Loader from "react-loaders";
import Typewriter from "typewriter-effect"
import aboutIllustration from "../../assets/images/about.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHtml5,
    faJsSquare,
    faCss3,
    faReact,
    faJava
  } from '@fortawesome/free-brands-svg-icons'
import { faC } from "@fortawesome/free-solid-svg-icons";
import './index.scss'
const About =()=>{
    return(
        <>
            <main className="about-page">
                <section className="about-hero">
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
                        <br/>
                            <ul>
                            Besides Web Development, here are some other things I enjoy😊
                                <li>Video Games</li>
                                <li>Dogs</li>
                                <li>Outdoors</li>
                            </ul>
                    </div>
                    <img src={aboutIllustration}/>
                </section>
                <section className="skills">
                    <h1>Skills</h1>
                    <div className="icon-grid">
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faJava} color="#5382a1" />
                        </div>
                        <div className="grid-item">
                            <FontAwesomeIcon icon={faC} color="#A8B9CC" />
                        </div>
                    </div>
                </section>
                <section className="tools">
                    <h1>
                        Developer Tools I Use
                    </h1>
                    <div className="icon-grid">
                        <div className="grid-item">      
                            <i class="devicon-eclipse-plain colored"></i>
                        </div>
                        <div className="grid-item">      
                            <i class="devicon-vscode-plain colored"></i>
                        </div>
                        <div className="grid-item">      
                            <i class="devicon-windows11-original colored"></i>
                        </div>
                        <div className="grid-item">         
                            <i class="devicon-github-original colored"></i>
                        </div>
                        <div className="grid-item">                              
                            <i class="devicon-figma-plain colored"></i>
                        </div>
                    </div>
                </section>
            </main>
            <Loader type='cube-transition'/>
        </>
    )
}
export default About;