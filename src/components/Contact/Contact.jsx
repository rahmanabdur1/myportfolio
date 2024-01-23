import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import developer_img from '../../assets/developer-img.jpg'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        <div className='contact-container' id="contact">
            <div className='contact'>
                <div className='contact_form'>
                    <div className='contact_form-text'>
                        <h2>Get in touch</h2>
                        <p>My friendly team would love to hear from you.</p></div>
                    <form onSubmit={sendEmail}>
                        <div className='name_email-form'>
                            <div className='form-group name'>
                                <label htmlFor='name'>Name </label>
                                <input type='text' id='name' name='Name' placeholder='Name *' required />
                            </div>
                            <div className='form-group email'>
                                <label htmlFor='email'>Email </label>
                                <input type='email' id='email' placeholder='Email *' name='email' required />
                            </div>

                        </div>
                        <div className='form-group'>
                            <label htmlFor='subject'>Subject</label>
                            <input type='text' id='subject' placeholder='Subject *' name='subject' required />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='message'>Your message *</label>
                            <textarea id='message' name='message' rows='4' placeholder='Message' required></textarea>
                        </div>
                        <button type='submit'>SEND MESSAGE</button>
                    </form>
                </div>

                <div className='contact_img-content'>
                    <div>
                        <img src={developer_img} alt="Developer" />
                    </div>
                    <div className='contact-info'>
                        <div className='contact-info-item'>
                            <div className='phone-icon'>
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className='phone'>
                                <span>PHONE</span>
                                <span>+01777836128</span>
                            </div>
                        </div>
                        <div className='contact-info-item'>
                            <div className='mail-icon'>

                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div className='mail'>
                                <span>MAIL</span>
                                <span>rahmanabdurr65@gmail.com</span>
                            </div>
                        </div>
                        <div className='contact-info-item links'>
                            <a href="https://www.facebook.com/profile.php?id=100023858793451" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.instagram.com/rahmanabdurr65/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a href="https://www.linkedin.com/in/abdur-r-rahman-723464245/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
