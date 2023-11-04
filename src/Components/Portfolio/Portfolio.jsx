import React from "react"
import "./Portfolio.css"
import img1 from "../../assets/imgs/portfolio1.png"
const Portfolio = () =>{
    return(
        <>
            <section className="portfolio" id="portfolio">
                <div className="container">
                    <div className="portfolio-title">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="portfolio-list">
                        <div className="portfolio-itens">
                            <img src={img1} alt="portfolio1" />
                            <div className="portfolio-navigate">
                                <a href="./">Demo</a>
                                <a href="./">Code</a>
                            </div>
                        </div>
                        <div className="portfolio-itens">
                            <img src={img1} alt="portfolio1" />
                            <div className="portfolio-navigate">
                                <a href="./">Demo</a>
                                <a href="./">Code</a>
                            </div>
                        </div>
                        <div className="portfolio-itens">
                            <img src={img1} alt="portfolio1" />
                            <div className="portfolio-navigate">
                                <a href="./">Demo</a>
                                <a href="./">Code</a>
                            </div>
                        </div>
                        <div className="portfolio-itens">
                            <img src={img1} alt="portfolio1" />
                            <div className="portfolio-navigate">
                                <a href="./">Demo</a>
                                <a href="./">Code</a>
                            </div>
                        </div>
                        <div className="portfolio-itens">
                            <img src={img1} alt="portfolio1" />
                            <div className="portfolio-navigate">
                                <a href="./">Demo</a>
                                <a href="./">Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio