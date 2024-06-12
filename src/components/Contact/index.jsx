import Typewriter from "typewriter-effect"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import aboutIllustration from "../../assets/images/about.svg"
import ParticleComponent from '../particles'
import './index.scss'
const Contact = () =>{
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_zccs6b9', 'template_bo1e8l8', form.current).then(
            () => {
                alert('Message successfully sent!')
                window.location.reload(false)
            },
            () => {
                alert('Failed to send the message, please try again')
            },
          );
      }
    return(
        <>
            <ParticleComponent/>
            <main className="contact-page">
                <section className="contact-section">
                    <div className="contact-container">
                        <form ref={form} onSubmit={sendEmail} className="contact-left">
                            <h1>
                                <Typewriter
                                    loop={false}
                                    onInit={(typewriter) => {
                                    typewriter
                                        .pauseFor(2000)
                                        .changeDelay(50)
                                        .typeString("Contact Me")
                                        .start()
                                    }}
                                />
                            </h1>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio architecto dolore sapiente numquam repellat incidunt voluptatum consequatur neque. Placeat at modi eos, debitis blanditiis nam quisquam doloribus quos voluptates possimus!
                            </p>
                            <hr/>
                            <input placeholder="Name" type="text" name="name" required></input>
                            <input placeholder="Email" type="email" name="email" required></input>
                            <input placeholder="Subject" type="text" name="subject" required></input>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            <button type="submit" className="flat-button">SEND</button>
                        </form>
                        <div className="contact-right">
                            <img src={aboutIllustration} alt="illustration"/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Contact;