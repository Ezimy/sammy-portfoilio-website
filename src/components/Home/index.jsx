import { Link } from 'react-router-dom';
import './index.scss'
import Typewriter from "typewriter-effect"
import Illustration from '../../assets/images/illustration.svg'
import introImg from '../../assets/images/profile-image.jpg'
import Loader from 'react-loaders';
import ParticleComponent from '../particles'
const Home = ()=>{
    return(
        <>
        <ParticleComponent id='particles'/>
        <main className='home-page'>
            <section className='greeting'>
                <div>
                    <h1>
                        <Typewriter
                            loop={false}
                            onInit={(typewriter) => {
                            typewriter
                                .pauseFor(2000)
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
            <section className='intro'>
                <div className='intro-text'>
                    <h1>Introduction</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi molestias fugiat quam, repudiandae eligendi aspernatur non repellat nostrum minus doloribus magni velit at laboriosam dolorem! Autem soluta neque veniam adipisci.
                    </p>
                </div>
                <img src={introImg}/>
            </section>
        </main>
        {/* <Loader type='cube-transition'/> */}
        </>
    )
}
export default Home;
