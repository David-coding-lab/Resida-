import contactIcon1 from "../assets/contac-icon1.png";
import contactIcon2 from "../assets/contact-icon2.png";
import contactIcon3 from "../assets/contact-icon3.png";
import twetterIcon from "../assets/twetterIcon.png";
import Instagram from "../assets/instagram_stroke.png";
import discordIcon from "../assets/discord_icon.png";
import arrow from "../assets/download arrow.png";
import checkedImg from "../assets/checked-.svg";
import { useState } from "react";
const ContactSection = ({setContactPage}) => {
  function alertUser(){
    setContactPage(false)
    alert(`Message Submitted`)
  }
  return (
    <div className="contact_section">
      <div className="contact_header">
        <h1>Contact us</h1>
        <h4>Any questions or remarks, just write us a message!</h4>
      </div>
      <div className="contact_body">
        <div className="contact_body_left_sec">
          <div className="contact_titles">
            <h2>Contact information</h2>
            <h4>Say somthing to start a live chat!</h4>
          </div>
          <div className="contact_details">
            <div className="call contact_icon">
              <img src={contactIcon1} alt="contact icon" />
              <p>+1 012 3826 781</p>
            </div>
            <div className="email contact_icon">
              <img src={contactIcon2} alt="contact icon" />
              <p>demo@gmail.com</p>
            </div>
            <div className="location contact_icon">
              <img src={contactIcon3} alt="contact icon" />
              <p>
                132 Dartmouth Street Boston,
                <br /> Massachusetts 02156 United States
              </p>
            </div>
          </div>
          <div className="footerIcons">
            <div className="footer_icon_con">
              <img src={twetterIcon} alt="social icon" />
            </div>
            <div className="footer_icon_con2">
              <img src={Instagram} alt="social icon" />
            </div>
            <div className="footer_icon_con">
              <img src={discordIcon} alt="social icon" />
            </div>
          </div>
          <div className="trans_circle"></div>
        </div>
        <div className="contact_body_right_sec">
          <form>
            <div className="fname_lname">
              <span>
                <label htmlFor="First name">First Name</label>
                <input type="text" name="First Name" />
              </span>
              <span>
                <label htmlFor="last name">Last Name</label>
                <input type="text" name="Last Name" />
              </span>
            </div>
            <div className="email_phone">
              <span>
                <label htmlFor="Email">Email</label>
                <input type="text" name="Email" />
              </span>
              <span>
                <label htmlFor="Phone Number">Phone Number</label>
                <input type="text" name="Phone Number" />
              </span>
            </div>
          </form>
          <div className="message_subject">
            <h4>Select Subject?</h4>
            <div className="checkboxes_container">
              <Checkbox value="General Inquiry" />
              <Checkbox value="Payments and Fees" />
              <Checkbox value="Technical" />
              <Checkbox value="Registration" />
              <Checkbox value="Other" />
            </div>
          </div>
          <div className="message">
            <label htmlFor="message">Message</label>
            <input type="text" name="message" placeholder="Write your message.." />
            <button className="message_btn" onClick={alertUser}> 
              Send Message <img src={arrow} alt="right arrow" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Checkbox = ({value }) => {
  const [checked, setChecked] = useState(false)
  return (
    <div className="checkbox_checkboxValue" onClick={()=> {
      checked ? setChecked(false): setChecked(true)
    }}>
      <div className="checkBox" style={checked ?{backgroundColor: '#1f4b43'}:{backgroundColor: 'white'}}>
        {checked && <img src={checkedImg} alt="Checke Mark" width={"10px"} />}
      </div>
      <p className="value">{value}</p>
    </div>
  );
};
export default ContactSection;
