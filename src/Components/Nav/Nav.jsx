import React, {useState} from "react"
import { FaBarsStaggered } from 'react-icons/fa6';
import { useMediaQuery } from '@react-hook/media-query';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import "./Nav.css"

const Nav = () =>{

    const [showNavList, setShowNavList] = useState(false)
    const isMobile = useMediaQuery('(max-width: 768px)')

    const toggleIcon = (e) =>{
        setShowNavList(!showNavList)
    }
    return( 
        <>
        {!isMobile ? <nav className="nav nav-bar-desktop">
            <div className="container">
                <div className="nav-itens">
                    <div className="logo">
                        <a href="./">Rene s.</a>
                    </div>
                    <ul className="nav-ul-list">
                        <li className="nav-li-list About">Sobre mim</li>
                        <li className="nav-li-list Portfolio">Portfolio</li>
                        <li className="nav-li-list Experience">Experiência</li>
                        <li className="nav-li-list Contact">Contato</li>
                    </ul>
                </div>
            </div>
        </nav> 
        : 
        <nav className="nav nav-bar-mobile">
            <div className="container">
                <div className="nav-itens">
                    <div className="logo">
                        Rene s.
                    </div>
                    <div className="toggle-icon" onClick={toggleIcon}>
                        <FaBarsStaggered/>
                    </div>
                    <div className={showNavList ? 'nav-ul-list fade-in': 'nav-ul-list fade-out'}>
                        <ul className="nav-ul">
                            <li className="nav-li-list About">Sobre mim</li>
                            <li className="nav-li-list Portfolio">Portfolio</li>
                            <li className="nav-li-list Experience">Experiência</li>
                            <li className="nav-li-list Contact">Contato</li>
                        </ul>

                        <ul className="nav-ul">
                            <div className="nav-ul-social">
                                <a href="./"><AiFillGithub/></a>
                                <a href="./"><AiFillLinkedin/></a>
                                <a href="./"><AiOutlineMail/></a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>}
        </>
    )
}

export default Nav