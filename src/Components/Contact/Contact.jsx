import React from "react"
import "./Contact.css"

const Contact = () =>{
    return (
        <>
            <section className="contact" id="contact">
                <div className="container">
                    <div className="contact-title">
                        <h1>Contact</h1>
                    </div>
                    <form action="" className="form-contact">
                        <div className="contact-group">
                            <div className="input-group group-form">
                                <div className="contact-group-form">
                                    <input type="text" name="nome" className="nome" id="nome" autoComplete="off" required/>
                                    <label htmlFor="nome">Nome</label>
                                </div>
                                <div className="contact-group-form">
                                    <input type="text" name="email" className="email" id="email" autoComplete="off" required/>
                                    <label htmlFor="email">Email</label>
                                </div>
                            </div>

                            <div className="contact-group-form">
                                <textarea name="mensagem" id="mensagem" autoComplete="off" required></textarea>
                                <label htmlFor="mensagem">Mensagem</label>
                            </div>

                            <div className="button-group">
                                <button id="enviar" className="enviar">Enviar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact