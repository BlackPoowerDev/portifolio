import React, {useEffect} from "react"
import "./Title.css"
import imgUser from "../../assets/imgs/user.png"
import {HiOutlineArrowNarrowRight} from "react-icons/hi"
import scrollreveal from "scrollreveal"

const Title = () =>{
    useEffect( () =>{
        scrollreveal().reveal('.user-text',{
            duration: 1200,
            origin: "top",
            distance: "120px"
        })
        scrollreveal().reveal('.user-img',{
            duration: 1200,
            origin: "bottom",
            distance: "120px"
        })
    },[])
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
                        <img className="img-profile" src={imgUser} alt="user-img" /> 
                    </div>
                </div>
            </div>
        </>
    )
}

export default Title