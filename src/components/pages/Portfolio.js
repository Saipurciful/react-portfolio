import React from 'react'
import { FaGithub, FaChrome } from "react-icons/fa"
import CardDeck from 'react-bootstrap/CardDeck'
import Card from 'react-bootstrap/Card'
function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <section className="port">
                <div className="thumb">
                    <img src="burger.png" alt="" />

                    <h5>JS: Eat-Da-Burger <a target="_blank" href="https://github.com/Saipurciful/burger"> <FaGithub />
                     Code</a>
                        <a target="_blank" href="https://evening-wildwood-75697.herokuapp.com/"><FaChrome />
                    Website</a></h5>

                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src="calendar.png" alt="" />

                    <h5>JS: Daily Calendar <a target="_blank" href="https://github.com/Saipurciful/DailyCalendar"><FaGithub />
                         Code</a>
                        <a target="_blank" href="https://saipurciful.github.io/DailyCalendar/"><FaChrome />
                         Website</a></h5>

                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src="cocktail.png" alt="" />

                    <h5>JS: Meals Generator <a target="_blank" href="https://github.com/samrod777/Recipe-List-Platform"><FaGithub />
                    Code</a>
                        <a target="_blank" href="https://samrod777.github.io/Recipe-List-Platform/"><FaChrome />
                    Website</a></h5>


                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src="codeq.png" alt="" />
                    <h5>JS: CodeQuiz <a target="_blank" href="https://github.com/Saipurciful/JS-CodeQuiz"><FaGithub />
                    Code</a>
                        <a target="_blank" href="https://saipurciful.github.io/JS-CodeQuiz/"><FaChrome />
                    Website</a></h5>

                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src="noteTaker.png" alt="" />
                    <h5>JS: Note Taker <a target="_blank" href="https://github.com/Saipurciful/Note-Taker"><FaGithub />
                    Code</a>
                        <a target="_blank" href="https://notetakerapplic.herokuapp.com/"><FaChrome />
                    Website</a></h5>

                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src="pwgen.png" alt="" />
                    <h5>JS: PW-Generator <a target="_blank" href="https://github.com/Saipurciful/Password-Generator"><FaGithub /> Code</a>
                        <a target="_blank" href="https://saipurciful.github.io/Password-Generator/"><FaChrome />Website</a></h5>
                </div>

                <div className="thumb" data-id="Handlebars">
                    <img src="caffee.png" alt="" />
                    <h5>HANDLEBAR: Caffeine <a target="_blank" href="https://github.com/aprilyanggarwood/CaffeinParadise2/tree/Sai"><FaGithub /> Code</a>
                        <a target="_blank" href="https://caffeinparadise2.herokuapp.com/signup.html"><FaChrome /> Website</a></h5>
                </div>

                <div className="thumb" data-id="Mern">
                    <img src="/56-imageGalleryHoverEffects/noteTaker.png" alt="COMMING SOON" />
                    <h5><FaGithub />MERN: Code
                <FaChrome /> Website</h5>
                </div>
                <div className="thumb" data-id="Mern">
                    <img src="/56-imageGalleryHoverEffects/noteTaker.png" alt="COMMING SOON" />
                    <h5><FaGithub />MERN: Code
                <FaChrome /> Website</h5>
                </div>
            </section>

        </div>
    )

}

export default Portfolio
