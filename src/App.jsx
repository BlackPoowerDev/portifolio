import React from "react"
import "./App.css"
import Nav  from "./Components/Nav/Nav"
import Social  from "./Components/Social/Social"
import Title  from "./Components/Title/Title"
import About  from "./Components/About/About"
import Portfolio  from "./Components/Portfolio/Portfolio"
import Experience  from "./Components/Experience/Experience"
import Contact  from "./Components/Contact/Contact"

const App = () =>{
    return(
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
    )
}

export default App