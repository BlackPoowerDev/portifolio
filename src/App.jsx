import React, {useEffect, useState} from "react"
import "./App.css"
import Nav  from "./Components/Nav/Nav"
import Social  from "./Components/Social/Social"
import Title  from "./Components/Title/Title"
import About  from "./Components/About/About"
import Portfolio  from "./Components/Portfolio/Portfolio"
import Experience  from "./Components/Experience/Experience"
import Contact  from "./Components/Contact/Contact"

import {AiOutlineLoading3Quarters} from "react-icons/ai"

const App = () =>{
    const [loading, setloading] = useState(true)
    useEffect(() =>{
        const timeout = setTimeout( ()=>{
            setloading(false)
        },2000)
        return () => clearTimeout(timeout);
    },[])

    useEffect(() =>{
        if(loading === false){
            const navLinks = document.querySelectorAll('.nav-li-list')
            navLinks.forEach( (e) =>{
                e.addEventListener('click', (el) =>{
                    scrollPage(el.target.classList[1])
                })
            })
        }
    },[loading])

    const scrollPage = (value) =>{
        const scroll = document.getElementById(`${value.toLowerCase()}`);
        scroll.scrollIntoView({behavior: "smooth", block: "end"})
    }
    
    return(
        <>
        {loading ? 
            <div className="load">
                <div className="load-center">
                    <AiOutlineLoading3Quarters/>
                </div>
            </div>: 
            <>
                <header className="header">
                    <Nav/>
                    <Social/>
                    <Title/>
                </header>
                <About/>
                <Portfolio/>
                <Experience/>
                <Contact/>
            </>
        }
        </>
    )
}

export default App