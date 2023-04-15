import React from 'react'
import "./about.css"
import socialLinksData from './socialLinksData'
import { useInView } from 'react-intersection-observer';

export default function About() {

    const { ref, inView } = useInView();

    const socialLinks = socialLinksData.map(social => {
        return (
            <a
                key={social.id}
                href={social.link}
                target="_blank"
                style={{ "--i": social.id }}
                className={inView ? "social-icon scroll" : "social-icon"}
                ref={ref}
            >
                <ion-icon name={social.name}></ion-icon>
            </a>
        )
    })

    return (
        <section id="about" className="page">
            <div className="about-content">
                <h3>Hello, It's Me</h3>
                <h1>Khalil Baloch</h1>
                <h3>And I'm a <span>Front-end Developer .</span></h3>
                <p>
                    Meet Khalil, the Front-End developer who turns coffee into code and
                    designs into digital masterpieces. With a passion for pixels and an
                    eye for detail, I can turn your website dreams into a reality faster
                    than you can say "browser compatibility". Just don't forget to bring
                    the coffee!
                </p>
            </div>

            <div className="media-container">
                {socialLinks}
            </div>
        </section>

    )
}
