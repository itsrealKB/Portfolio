import React, { useEffect, useRef } from 'react'
import "./home.css"
import Typed from 'typed.js';

export default function Home() {

    const el = useRef(null)

    useEffect(() => {

        var typed = new Typed(el.current, {
            strings: ["Frontend Developer ."],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true,
        });
        return () => {
            typed.destroy();
        };
    }, [])

    return (
        <section id="home" className="page">
            <div className="home-content">
                <h3>Hello, It's Me</h3>
                <h1>Khalil Baloch</h1>
                <h3>And I'm a <span className="front-end" ref={el}></span></h3>
                <a href="assts/My-CV.pdf" download="Khalil-Baloch" className="btn">
                    <span>Download CV</span>
                </a>
            </div>
            <div className="my-img">
                <img src="assts/hacker.jpg" alt="My Photo" />
            </div>
        </section>
    )
}
