import React from 'react'
import FloatingComponent from 'react-floating-component';
import Button from 'react-bootstrap/Button'
import { Link, useLocation } from "react-router-dom"
import ProfilePic from "../images/22.png"

function Home() {
    const location = useLocation();
    return (
        <section className="homeBody">
            <main>
                <FloatingComponent><img src={ProfilePic} alt="" className="aboutPic" /></FloatingComponent>
            </main>

            <div>
                <div className="homeContainer">
                    <div className="headerHome">
                        <div className="containerP">
                            <div className="banner-text">


                                <div className="text-area">

                                    <h1>
                                        <span> H </span>
                                        <span> i </span>
                                        <br />

                                        <span>I</span>
                                        <span>'</span>
                                        <span>m</span>
                                        <span>.. </span>

                                        <span>S</span>
                                        <span>a</span>
                                        <span>i</span>
                                    </h1>
                                </div>

                                <div className="text">
                                    <h1>
                                        <span> W </span>
                                        <span className="m-left"> e </span>
                                        <span className="m-left"> b </span>
                                        <span className="space"> </span>
                                        <span> D </span>
                                        <span className="m-left"> e </span>
                                        <span className="m-left"> v </span>
                                        <span className="m-left"> e </span>
                                        <span className="m-left"> l </span>
                                        <span className="m-left"> o </span>
                                        <span className="m-left"> p </span>
                                        <span className="m-left"> e </span>
                                        <span className="m-left"> r </span>
                                    </h1>

                                </div>
                                <Button variant="outline-info" size="lg"> <Link
                                    to="/contact"
                                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                                >
                                    Contact Me
        </Link></Button>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
export default Home