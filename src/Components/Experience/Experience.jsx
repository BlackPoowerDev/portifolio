import React from "react"
import "./Experience.css"
import {AiOutlineHtml5} from "react-icons/ai"
import {BiLogoCss3,BiLogoJavascript, BiLogoReact} from "react-icons/bi"
import {SiMysql} from "react-icons/si"
import {DiNodejs} from "react-icons/di"

const Experience = () =>{
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