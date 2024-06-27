import { Link } from 'react-router-dom';
import './index.scss'
import Typewriter from "typewriter-effect"
import Lottie from 'lottie-react';
import computerAnimation from '../../assets/animations/computer-animation.json'
import ParticleComponent from '../particles'
import {useInView} from 'react-intersection-observer'
const Home = ()=>{
    const { ref:greetingRef, inView:greetingIsVisible} = useInView({
        triggerOnce:true,
        delay: 200
    });
    // const { ref:introRef, inView:introIsVisible} = useInView({
    //     triggerOnce:true,
    //     delay: 200
    // });
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
                                .typeString('Hi <span class="handwave">👋</span>, <br/> I\'m Sammy Yang<br/> A Web Developer')
                                .start()
                            }}
                        />
                    </h1>
                    <h2>
                        Frontend Developer/React.js Expert/ JavaScript Expert
                    </h2>
                    <div className='button-section'>
                    <Link to="/about" className='flat-button'>ABOUT</Link>
                        <Link to="/contact" className='flat-button'>CONTACT</Link>
                    </div>
                </div>
                <Lottie animationData={computerAnimation} className='illustration'/>
            </section>
        </main>
        </>
    )
}
export default Home;
