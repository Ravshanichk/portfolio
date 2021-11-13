import React, {useContext, useRef, useState} from "react"
import './Contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context"

const Contact = () => {
    const formRef = useRef();

    const [done,setDone]=useState(false)
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_x28tlq9', 'template_mhhwcmw', formRef.current, 'user_8WhDd4ZY5Q1O8ZDkUdPiZ')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img className="c-icon" alt="phoneIcon" src={Phone}/>
                            +7 708 455 86 64
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" alt="phoneIcon" src={Email}/>
                            rbkkth9@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" alt="phoneIcon" src={Address}/>
                            +7 708 455 86 64
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className='c-desc'>
                        <b>Che po chem</b> Call me, text me, tell me your story
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{background:darkMode&&"#333"}} type="text" placeholder="Name" name="user_name"/>
                        <input style={{background:darkMode&&"#333"}} type="text" placeholder="Subject" name="user_subject"/>
                        <input style={{background:darkMode&&"#333"}} type="text" placeholder="Email" name="user_email"/>
                        <textarea style={{background:darkMode&&"#333"}} rows="5" placeholder="Message" name="message"/>
                        <button className="c-button">Submit</button>
                        {done && " Thank you for contact"}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
