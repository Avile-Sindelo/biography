import "./intro.css"
import Me from "../../img/portfolio2.png"

const Intro = () => {
    return(
        <div className="i">
             <div className="i-left"> 
                <div className="i-left-wrapper">
                    <h2 className="i-intro"> Hello World, My name is</h2>
                    <h1 className="i-name"> Avile Sindelo </h1>
                    <h3 className="i-mobile"> Software Developer </h3>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"> JavaScript </div>
                            <div className="i-title-item"> ReactJS </div>
                            <div className="i-title-item"> UI/UX Design </div>
                            <div className="i-title-item"> NodeJS </div>
                            <div className="i-title-item"> Databases </div>
                            <div className="i-title-item"> Java </div>
                        </div>
                    </div>

                    <p className="i-desc">
                        I design and develop stylish and modern websites, mobile applications and online stores.
                    </p>
                </div>
             </div>
             <div className="i-right">
                 <div className="img-bg"> <img src={Me} alt="" className="i-img" /> </div>
                
             </div>
        </div> 
    ) 
}

export default Intro