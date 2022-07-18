import React, { useRef,useState } from 'react';
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {BsLinkedin} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com";


const Contact = () => {
  const form= useRef()
  const [status, setStatus] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_otenkoi', 'template_lm37ztw', form.current, '0qEytRhXqOf0cpUUe')
      .then((result) => {
          console.log(result.text);
          setStatus(true);
        }, (error) => {
          console.log(error.text);
      });
      console.log(status,"statuuuuus")
      e.target.reset()
  };
  
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <a href="mailto:jordirocasoler94@gmail.com" target="_blank">
          <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jordirocasoler94@gmail.com</h5>
            <h5>Send an email</h5>
          </article>
          </a>
          <a href="https://www.linkedin.com/in/jordi-roca-soler/" target="_blank">
          <article className="contact__option">
          <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>/jordi-roca-soler</h5>
            <h5>Send a message</h5>
          </article>
          </a>
          <a href="https://api.whatsapp.com/send?phone=34622588996" target="_blank">
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+34 622 588 996</h5>
            <h5>Send a message</h5>
          </article>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <div className='contact__submit'>
          <button type='submit' className='btn btn-primary'>Send</button>
          {status === true && <p>Your message was sent successfully</p>}
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact