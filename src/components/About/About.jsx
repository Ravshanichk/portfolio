import React from "react"
import './About.css'
import about from '../../img/aboutImg.JPG'
import cognac from '../../img/cognac.png'

function About() {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={about} alt="card" className="a-img">
                    </img>
                </div>
            </div>
            <div className="a-right">
            <h1 className="a-title">Memento mori</h1>
        <p className="a-sub">
          It is a long established fact that a reader will be distracted by the
          readable content.
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
            <div className="a-award">
                <img src={cognac} className="a-award-img" alt="award"></img>
            </div>
            <h4 className="a-title">Cognac drinking contest</h4>
        <p className="a-sub">
          It is a long established fact that drinking cognac will help with the
          readable content.
        </p>
            </div>
        </div>
    )
}

export default About
