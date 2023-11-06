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
        setTimeout( ()=>{
            setloading(false)
        },2000)
    },[])
    return(
        <>
        {loading ? <div className="load">
                <div className="load-center">
                    <AiOutlineLoading3Quarters/>
                </div>
            </div>: ''}
            
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
    )
}

export default App