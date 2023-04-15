import React, { useState } from 'react'
import "./header.css"
import linksData from './linksData'

export default function Header() {

    const [Links, setLinks] = useState(linksData)

    function toggleMenu() {
        const header = document.querySelector(".header")
        header.classList.toggle("active")
    }

    function toggleActive(index) {
        setLinks(prevLinks => {
            return prevLinks.map(link => {
                return link.index === index ? { ...link, isActive: !link.isActive } : { ...link, isActive: false }
            })
        })
    }

    const linkComp = Links.map(link => {
        return (
            <a href={link.idName}
                key={link.index}
                style={{ "--i": link.index }}
                className={link.isActive ? "nav--links active" : "nav--links"}
                onClick={() => toggleActive(link.index)}
            >
                {link.title}
            </a>
        )
    })

    return (
        <header className="header">
            <a href="#home" id="title">Portfolio.</a>
            <div className="menu--toggle" onClick={toggleMenu}></div>

            <nav className="navbar">
                {linkComp}
            </nav>
        </header>
    )
}
