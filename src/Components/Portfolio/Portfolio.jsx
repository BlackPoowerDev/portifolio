
import React, {useEffect} from "react"
import "./Portfolio.css"
import scrollreveal from "scrollreveal"
import {AiFillGithub} from "react-icons/ai"
import relogio from "../../assets/imgs/relogio.png"
import previsao from "../../assets/imgs/previsao.png"
import pokemon from "../../assets/imgs/pokemon.png"
import cardapio from "../../assets/imgs/cardapio.png"
import crud_node from "../../assets/imgs/crud-node.png"

const Portfolio = () =>{
    useEffect( ()=>{
        scrollreveal().reveal('.portfolio-title',{
            delay: 500,
            duration: 1000,
            scale: 0.35
        })
        scrollreveal().reveal('.portfolio-list',{
            delay: 500,
            duration: 1500,
            scale: 0.35,
            origin: "bottom",
            distance: "200px"
        })
    },[])

    return(
        <>
            <section className="portfolio" id="portfolio">
                <div className="container">
                    <div className="portfolio-title">
                        <h1>Portfolio</h1>
                    </div>
                    <div className="portfolio-list">
                        <div className="portfolio-itens">
                            <img src={relogio} alt="relogio-digital" />
                            <div className="portfolio-navigate">
                                <a href="./"><AiFillGithub/> Github</a>
                            </div>
                        </div>
                        <div className="portfolio-itens">
                            <img src={previsao} alt="previsao-do-tempo" />
                            <div className="portfolio-navigate">
                                <a href="./"><AiFillGithub/> Github</a>
                            </div>
                        </div>
                        <div className="portfolio-itens">
                            <img src={pokemon} alt="pokemon" />
                            <div className="portfolio-navigate">
                                <a href="./"><AiFillGithub/> Github</a>
                            </div>
                        </div>
                        <div className="portfolio-itens">
                            <img src={cardapio} alt="cardapio" />
                            <div className="portfolio-navigate">
                                <a href="./"><AiFillGithub/> Github</a>
                            </div>
                        </div>
                        <div className="portfolio-itens">
                            <img src={crud_node} alt="crud-node" />
                            <div className="portfolio-navigate">
                                <a href="./"><AiFillGithub/> Github</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio