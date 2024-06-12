import { Link } from 'react-router-dom';
import './index.scss'
import Typewriter from "typewriter-effect"
import Illustration from '../../assets/images/illustration.svg'
import introImg from '../../assets/images/profile-image.jpg'
import ParticleComponent from '../particles'
import {useInView} from 'react-intersection-observer'
const Home = ()=>{
    const { ref:greetingRef, inView:greetingIsVisible} = useInView({
        triggerOnce:true,
        delay: 200
    });
    const { ref:introRef, inView:introIsVisible} = useInView({
        triggerOnce:true,
        delay: 200
    });
    return(
        <>
        <ParticleComponent id='particles'/>
        <main className='home-page'>
            <section className={`greeting ${greetingIsVisible ? 'show' : 'hidden'}`} ref={greetingRef}>
                <div>
                    <h1>
                        <Typewriter
                            loop={false}
                            onInit={(typewriter) => {
                            typewriter
                                .pauseFor(1000)
                                .changeDelay(50)
                                .typeString("Hi 👋, <br/> I'm Sammy Yang<br/> A Web Developer")
                                .start()
                            }}
                        />
                    </h1>
                    <h2>
                        Frontend Developer/React.js Expert/ JavaScript Expert
                    </h2>
                    <div>
                        <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    </div>
                </div>
                <img src={Illustration} alt='illustration'/>
            </section>
            <section className={`intro ${introIsVisible ? 'show' : 'hidden'}`} ref={introRef}>
                <div className='intro-text'>
                    <h1>Introduction</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aliquid distinctio tenetur obcaecati velit, quibusdam consequatur ipsum quae laboriosam officiis qui nisi facilis nesciunt autem eius doloremque rerum debitis delectus?
                    </p>
                </div>
                <img src={introImg}/>
            </section>
        </main>
        </>
    )
}
export default Home;
