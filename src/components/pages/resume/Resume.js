import React from 'react'
import "./Resume.css"
import Iframe from "react-iframe"
import resume from "./resume.pdf"
function Resume() {
    return (
        <div>
            <Iframe src={resume} className="resume" />
        </div>
    )
}

export default Resume
