import Typewriter from "typewriter-effect"
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import ParticleComponent from '../particles'
import contactAnimation from '../../assets/animations/contact-me.json'
import './index.scss'
import Lottie from "lottie-react"
export const Contact = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm('service_zccs6b9', 'template_bo1e8l8', form.current, {
          publicKey: 'as_0mRyQ9CPH7I9Eb',
        })
        .then(
          () => {
            alert('SUCCESS!');
          },
          (error) => {
            alert('FAILED...', error.text);
          },
        );
    };
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
                            I’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. Please fill out the contact form below if you wish to contact me and I will respond as soon as possible.
                            </p>
                            <hr/>
                            <input placeholder="Name" type="text" name="user_name" required></input>
                            <input placeholder="Email" type="email" name="user_email" required></input>
                            <input placeholder="Subject" type="text" name="subject" required></input>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            <button type="submit" value="Send" className="flat-button">SEND</button>
                        </form>
                        <div className="contact-right">
                            <Lottie animationData={contactAnimation} className='illustration' alt="contact-illustration"/>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
export default Contact;