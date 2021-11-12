import React, {useRef} from "react"
import './Contact.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from 'emailjs-com';

const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e)=>{
        e.preventDefault();

        emailjs.sendForm('service_x28tlq9', 'template_mhhwcmw', formRef.current, 'user_8WhDd4ZY5Q1O8ZDkUdPiZ')
        .then((result) => {
            console.log(result.text);
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
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea rows="5" placeholder="Message" name="message"/>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
