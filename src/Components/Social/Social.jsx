import React from "react"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import "./Social.css"
const Social = ()=>{
    return (
        <>
            <div className="social-media">
                <div className="social-icons">
                    <a href="https://github.com/BlackPoowerDev/" target="_blank" rel="noreferrer"><span>GitHub</span> <AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/rene-silva-b26042262/" target="_blank" rel="noreferrer"><span>Linkedin</span> <AiFillLinkedin/></a>
                    <a href="mailto:renedfd20@gmail.com" target="_blank" rel="noreferrer"><span>E-mail</span> <AiOutlineMail/></a>
                </div>
            </div>
        </>
    )
}

export default Social