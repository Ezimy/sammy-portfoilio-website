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
import ParticleComponent from '../particles'
import {useInView} from 'react-intersection-observer'
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
                    <img src={aboutIllustration}/>
                </section>
                <section className={`skills ${skillsIsVisible? 'show' : 'hidden'}`} ref={skillsRef}>
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
                <section className={`tools ${toolsIsVisible? 'show' : 'hidden'}`} ref={toolsRef}>
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
        </>
    )
}
export default About;