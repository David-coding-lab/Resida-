import faceBookIcon from "../assets/Facebook icon.png";
import xIcon from "../assets/x icon.png";
import inIcon from "..//assets/in icon.png";
import instagramIcon from "../assets/Instagram icon.png";
import youtubeIcon from "../assets/YouTube icon.png";
import gmailIcon from "../assets/Email.png";
import phoneIcon from "../assets/Phone.png";
import locationIcon from "../assets/Mark.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="fstlinks">
        <div className="residaSocialSection">
          <h1>Resida</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <div className="social_icons">
            <img src={faceBookIcon} alt="social icons" />
            <img src={xIcon} alt="social icons" />
            <img src={instagramIcon} alt="social icons" />
            <img src={inIcon} alt="social icons" />
            <img src={youtubeIcon} alt="social icons" />
          </div>
        </div>
        <div className="product">
          <h3>Product</h3>
          <a href="">Pricing </a>
          <a href="">Case study</a>
          <a href="">Review</a>
          <a href="">Updates</a>
        </div>
        <div className="company">
          <h3>Company</h3>
          <a href="">Contact us </a>
          <a href="">Careers</a>
          <a href="">Culture</a>
          <a href="">Blog</a>
        </div>
        <div className="support">
          <h3>Support</h3>
          <a href="">Help center </a>
          <a href="">Server status</a>
          <a href="">Report A bug</a>
          <a href="">Chat support</a>
        </div>
        <div className="legal">
          <h3>Legal</h3>
          <a href="">User Term of us</a>
          <a href="">Paymeny & pricing policy</a>
          <a href="">Cookies & Data Pricacy</a>
        </div>
      </div>
      <div className="sndLinks">
        <a href="">
          <img src={gmailIcon} alt="icons" /> contact@company.com
        </a>
        <a href="">
          <img src={phoneIcon} alt="icon" /> (414) 687 - 5892
        </a>
        <a href="">
          794 Mcallister St San Francisco, 94102{" "}
          <img src={locationIcon} alt="icon" />
        </a>
      </div>
      <hr />
      <div className="thdlinks">
        <a href="">Copyright © 2022 BRIX Templates</a>
        <div className="all_right_reserved">
          <a href=""> All Rights Reserved |</a>
          <a href="" className="term_condition">
            Terms and Conditions
          </a>{" "}
          |{" "}
          <a href="" className="policy">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
