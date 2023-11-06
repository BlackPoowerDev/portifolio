<<<<<<< HEAD
import React, {useEffect} from "react"
import "./Title.css"
import imgUser from "../../assets/imgs/user.png"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import scrollreveal from "scrollreveal"

const Title = () =>{
    useEffect( () =>{
        scrollreveal().reveal('.user-text',{
            duration: 1200,
            delay: 100,
            origin: "top",
            distance: "120px"
        })
        scrollreveal().reveal('.user-img',{
            duration: 1200,
            delay: 100,
            origin: "bottom",
            distance: "120px"
        })
    },[])
=======
import React from "react"
import "./Title.css"
import imgUser from "../../assets/imgs/user.png"

import {HiOutlineArrowNarrowRight} from "react-icons/hi"

const Title = () =>{
>>>>>>> b198995dfc8a355ef4653d697cb2f562c63ceb6d
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
<<<<<<< HEAD
                        <img className="img-profile" src={imgUser} alt="user-img" /> 
                       
=======
                        <img src={imgUser} alt="user-img" />
>>>>>>> b198995dfc8a355ef4653d697cb2f562c63ceb6d
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title