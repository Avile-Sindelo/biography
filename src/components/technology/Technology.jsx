import "./technology.css"
import Java from "../../img/java2.png"
import JavaScript from "../../img/javascript1.jpeg"
import Cpp from "../../img/c++.png"
import Spring from "../../img/spring.png"
import React from "../../img/react2.png"
import Node from "../../img/node1.jpeg"
import Express from "../../img/express.jpeg"
import Poco from "../../img/poco1.jpeg"
import Mongo from "../../img/mongo4.png"
import Sql from "../../img/sql2.png"

const Technology = () => {
    return (
        <div className="tech-wrapper">
            <h1 className="tech-heading"> Technologies </h1>
            <div className="tech-right">
                <div className="tech-item-right">
                    <div className="slide-wrapper">
                        <img src={Java} alt="sliding " className="tech-image"></img>
                        <img src={Spring} alt="sliding " className="tech-image"></img>
                        <img src={Cpp} alt="sliding " className="tech-image"></img>
                        <img src={Poco} alt="sliding " className="tech-image"></img>
                        <img src={JavaScript} alt="sliding " className="tech-image"></img>
                        <img src={React} alt="sliding " className="tech-image"></img>
                        <img src={Node} alt="sliding " className="tech-image"></img>
                        <img src={Express} alt="sliding " className="tech-image"></img>
                        <img src={Sql} alt="sliding " className="tech-image"></img>
                        <img src={Mongo} alt="sliding " className="tech-image"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technology