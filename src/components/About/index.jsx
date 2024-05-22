import Loader from "react-loaders";
import Typewriter from "typewriter-effect"
import './index.scss'
const About =()=>{
    return(

        <>
            <main className="about-page">
                <section>
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
                </section>
                <section>
                    
                </section>
            </main>
            <Loader type='cube-transition'/>
        </>
    )
}
export default About;