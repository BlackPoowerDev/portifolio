import React from "react"
import "./Title.css"
import imgUser from "../../assets/imgs/user.png"

import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const Title = () =>{
    return(
        <>
            <div className="container">
                <div className="profile-user">
                    <div className="user-text">
                        <h1>Olá, meu nome é Renê.</h1>
                        <p>Sou um desenvolvedor Full Stack.</p>
                        <button className="portfolio">Portfólio <HiOutlineArrowNarrowRight/></button>
                    </div>
                    <div className="user-img">
                        <img src={imgUser} alt="user-img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title