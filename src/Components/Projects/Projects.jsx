import React from 'react'
import "./projects.css"
import projectsData from './projectsData'

export default function Projects() {

    const Projects = projectsData.map(proj => {
        return (
            <div className="cards-container" key={proj.id}>
                <div className="cards">
                    <div className="front">
                        <h1>{proj.title}</h1>
                    </div>
                    <div className="back">
                        <img src={proj.img} alt={proj.title} />
                        <a
                            href={proj.porjLink}
                            target="_blank"
                            className="btn projct-btn"
                        >
                            <span>Go To Project</span>
                        </a>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <section id="projects" className="page">
            <h1 className="proj--heading">Projects</h1>

            <div className="projects-container">
                {Projects}
            </div>
            <a href="mailto:balochkhalil4455@gmail.com" target='_blank' className="btn btn-hire"><span>Hire Me</span></a>
        </section>
    )
}
