
import React, {useEffect} from "react"
import scrollreveal from "scrollreveal"
import "./About.css"

const About = () =>{
    useEffect( () =>{
        scrollreveal().reveal('.about-title',{
            delay: 200,
            duration: 1000,
            origin: "left",
            distance: "90px"
        })

        scrollreveal().reveal('.about-text',{
            delay: 400,
            duration: 1300,
            origin: "left",
            distance: "150px"
        })
    },[])

    return (
        <>
            <section className="section" id="about">
                <div className="container">
                    <div className="about-title">
                        <h1>About</h1>
                    </div>
                    <div className="about-text">
                        <p>Sou um desenvolvedor entusiasta, apaixonado por programação. Já se passaram 4 anos desde que comecei a criar meus primeiros códigos e até hoje não parei. Dedico meu tempo para aprender novas tecnologias e aperfeiçoar meus conhecimentos. Estou em busca de novas oportunidades e posso garantir que sempre darei o meu máximo, independentemente de onde esteja.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About