import React, { useRef } from 'react';
import "./contact.css"
import {MdOutlineMail} from "react-icons/md"
import {BsLinkedin} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"
import emailjs from "emailjs-com";


const Contact = () => {
  const form= useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_otenkoi', 'template_lm37ztw', form.current, '0qEytRhXqOf0cpUUe')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
  
  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>jordirocasoler94@gmail.com</h5>
            <a href="mailto:jordirocasoler94@gmail.com" target="_blank">Send an email</a>
          </article>
          <article className="contact__option">
          <BsLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>/jordi-roca-soler</h5>
            <a href="https://www.linkedin.com/in/jordi-roca-soler/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+34 622 588 996</h5>
            <a href="https://api.whatsapp.com/send?phone=34622588996" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact