import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"

export default function Contact() {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_p5jy9zu', 'template_2e8oyzg', form.current, 'o85bs-y7I4gY02HzJ')
            .then((result) => {
                alert("Your Message has been sent")
            }, (error) => {
                alert("Sorry there is an Error")

            });
        e.target.reset()
    };

    return (
        <section id="contact" className="page">
            <div className="form">
                <h1>Contact Us.</h1>
                <form onSubmit={sendEmail} ref={form}>
                    <div className="inputBox">
                        <input type="text" name="user_name" placeholder="Full Name" required />
                    </div>
                    <div className="inputBox">
                        <input type="email" name="user_email" placeholder="Email" required />
                    </div>
                    <div className="inputBox">
                        <input type="text" name="subject" placeholder="Subject" required />
                    </div>
                    <div className="inputBox">
                        <input type="text" name="message" placeholder="Message" required />
                    </div>
                    <div className="inputBox">
                        <input type="submit" value="Submit" className="btn-submit" />
                    </div>
                </form>
            </div>
        </section>
    )
}
