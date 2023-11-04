import React from "react"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import "./Social.css"
const Social = ()=>{
    return (
        <>
            <div className="social-media">
                <div className="social-icons">
                    <a href="./"><span>Git Hub</span> <AiFillGithub/></a>
                    <a href="./"><span>Linkedin</span> <AiFillLinkedin/></a>
                    <a href="./"><span>E-mail</span> <AiOutlineMail/></a>
                </div>
            </div>
        </>
    )
}

export default Social