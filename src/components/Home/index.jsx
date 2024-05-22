import { Link } from 'react-router-dom';
import './index.scss'
import Typewriter from "typewriter-effect"
import Illustration from '../../assets/images/illustration.svg'
import introImg from '../../assets/images/logo.png'
import Loader from 'react-loaders';
const Home = ()=>{
    return(
        <>
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
                                .typeString("Hi, <br/> I'm Sammy Yang<br/> A Web Developer")
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
                    <h2>
                        I enjoy programming and am interested in web development, particularly front-end development
                        Am fluent in JavaScript, and Java

                    </h2>
                </div>
                <img src={introImg}/>
            </section>
        </main>
        <Loader type='cube-transition'/>
        </>
    )
}
export default Home;
