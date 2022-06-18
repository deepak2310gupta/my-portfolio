import "./contact.css";
import Phone from "../../images/phone.png";
import Email from "../../images/email.png";
import Address from "../../images/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {

    const [done, setDone] = useState(false)
    const formRef = useRef();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
          .sendForm(
            "service_rrvnzco",
            "template_3v5nih4",
            formRef.current,
            "user_DrriDPTGKO2Zj4RDXCA6W"
          )
          .then(
            (result) => {
              console.log(result.text);
              setDone(true)
            },
            (error) => {
              console.log(error.text);
            }
          );
      };

  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 829 506 7377
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              guptadeepak2310@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              Rewari, Haryana-123401, India
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. Always available for
            freelancing if the right project comes along. me.
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: "#fff" }}
              type="text"
              placeholder="Name"
              name="user_name"
            />
            <input
              style={{ backgroundColor: "#fff" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
            />
            <input
              style={{ backgroundColor: "#fff" }}
              type="text"
              placeholder="Email"
              name="user_email"
            />
            <textarea
              style={{ backgroundColor: "#fff" }}
              rows="5"
              placeholder="Message"
              name="message"
            />
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  );
};
