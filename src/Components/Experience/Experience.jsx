import React, {useEffect} from "react"
import "./Experience.css"
import {AiOutlineHtml5} from "react-icons/ai"
import {BiLogoCss3,BiLogoJavascript, BiLogoReact} from "react-icons/bi"
import {SiMysql} from "react-icons/si"
import {DiNodejs} from "react-icons/di"
import scrollreveal from "scrollreveal"

const Experience = () =>{
    useEffect( ()=>{
        scrollreveal().reveal('.experience-title',{
            origin: 'left',
            distance: '100px',
            duration: 1500,
            delay: 500,
        })
        const portfolio = document.querySelectorAll('.experience-icons')
        portfolio.forEach( (el) =>{
            scrollreveal().reveal(el,{
                origin: 'right',
                distance: '100px',
                duration: 1500,
                delay: 500,
            })
        })
    },[])
    return (
        <>
            <section className="experience" id="experience">
                <div className="container">
                    <div className="experience-title">
                        <h1>Experience</h1>
                    </div>
                    <div className="experience-list">
                        <span className="experience-icons"><AiOutlineHtml5/> </span>
                        <span className="experience-icons"><BiLogoCss3/> </span>
                        <span className="experience-icons"><BiLogoJavascript/> </span>
                        <span className="experience-icons"><BiLogoReact/> </span>
                        <span className="experience-icons"><DiNodejs/> </span>
                        <span className="experience-icons"><SiMysql/> </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Experience