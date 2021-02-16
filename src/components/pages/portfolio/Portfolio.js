import React from 'react'
import "./Portfolio.css"
import { FaGithub, FaChrome } from "react-icons/fa"
import Burger from "./burger.png"
import Calendar from "./calendar.png"
import Cocktail from "./cocktail.png"
import Code from "./codeq.png"
import NoteTaker from "./noteTaker.png"
import Coffee from "./caffee.png"

function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <section className="port">
                <div className="thumb">
                    <img src={Burger} alt="" />

                    <h5>JS: Eat-Da-Burger</h5> <br /><a href="https://github.com/Saipurciful/burger">  <FaGithub />
                     Code </a>
                    <a href="https://evening-wildwood-75697.herokuapp.com/"> <FaChrome />
                     Website </a>

                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src={Calendar} alt="" />

                    <h5>JS: Daily Calendar </h5> <br /> <a href="https://github.com/Saipurciful/DailyCalendar"><FaGithub />
                         Code </a>
                    <a href="https://saipurciful.github.io/DailyCalendar/"><FaChrome />
                         Website </a>

                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src={Cocktail} alt="" />

                    <h5>JS: Meals Generator </h5> <br /> <a href="https://github.com/samrod777/Recipe-List-Platform"><FaGithub />
                    Code </a>
                    <a href="https://samrod777.github.io/Recipe-List-Platform/"><FaChrome />
                    Website </a>


                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src={Code} alt="" />
                    <h5>JS: CodeQuiz </h5> <br /> <a href="https://github.com/Saipurciful/JS-CodeQuiz"><FaGithub />
                    Code </a>
                    <a href="https://saipurciful.github.io/JS-CodeQuiz/"><FaChrome />
                    Website </a>

                </div>

                <div className="thumb" data-id="JS/HTML/CSS">
                    <img src={NoteTaker} alt="" />
                    <h5>JS: Note Taker </h5> <br /> <a href="https://github.com/Saipurciful/Note-Taker"><FaGithub />
                    Code </a>
                    <a href="https://notetakerapplic.herokuapp.com/"><FaChrome />
                    Website </a>

                </div>

                <div className="thumb" data-id="Handlebars">
                    <img src={Coffee} alt="" />
                    <h5>HANDLEBAR: Caffeine </h5> <br /> <a href="https://github.com/aprilyanggarwood/CaffeinParadise2/tree/Sai"><FaGithub /> Code </a>
                    <a href="https://caffeinparadise2.herokuapp.com/signup.html"><FaChrome /> Website </a>
                </div>


            </section>

        </div>
    )

}

export default Portfolio
