import "./contact.css"
import Call from "../../img/call.png"
import Email from "../../img/email1.png"
import Address from "../../img/address3.png"
import Github from "../../img/github.png"
import { useRef, useState } from "react"
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jjmdxrw', 'template_7km0syq', formRef.current, 'user_tdiSrQcTxQqjPzAPbxQAv')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
            });

        alert(" Your email has been sent to Avile Sindelo. ");   
    }

    return (
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title"> Let's discuss your project </h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Call} alt="" className="contact-icon" />
                            079 016 2643
                        </div>

                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            avilesindelo@gmail.com
                        </div>

                        <div className="contact-info-item">
                            <img src={Github} alt="" className="contact-icon" />
                            <a href="https://github.com/Avile-Sindelo/"> GitHub </a>
                        </div>

                        <div className="contact-info-item">
                            <img src={Address} alt="" className="contact-icon" />
                            Amendu Loc, Zimbane A/A, Mthatha, Eastern Cape, South Africa.
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b> Need a Website? </b> Get in touch. Briefly describe your needs below and send me an email.
                    </p> 

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" id="user-name" />
                        <input type="text" placeholder="Subject" name="user_subject" id="user-subject"/>
                        <input type="text" placeholder="Email" name="user_email" id="user-email
                        "/>

                        <textarea rows="5" placeholder="Message" name="message" id="user-message"/>
                        <button type="submit"> Submit </button>
                        {done}
                       
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default Contact