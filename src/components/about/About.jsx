import "./about.css"
import Dev from "../../img/development81.png"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card">
                    <img src={Dev} alt="" className="about-img" />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title"> About Me </h1>
                <p className="about-sub"> Computer Scientist </p>
                <p className="about-desc"> 
                    Avile Sindelo is a Software Developer that Graduated Bsc Computer Science at Walter Sisulu University (2022).
                    I specialize in web development, designing and building stylish and modern websites for businesses and individual clients.<br></br>                  
                </p>
                <br></br>
                <h2 className="about-languages-title"> Programming Languages </h2>
                <ul className="about-languages">
                    <li> Java </li>
                    <li> C++ </li>
                    <li> JavaScript </li>
                </ul>

                <h2 className="about-frameworks-title"> Frameworks </h2>
                <ul className="about-frameworks">
                    <li> Spring </li>
                    <li> ReactJS </li>
                    <li> NodeJS</li>
                </ul>
            </div> 
        </div>
    )
}

export default About