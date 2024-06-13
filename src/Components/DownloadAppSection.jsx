import mobilePhoneImg from "../assets/download app mobile.png";
import appleIcon from "../assets/apple icon.png";
import playStoreIcon from "../assets/play store icon.png";
const DownloadCtaBtns = (props) => {
  return (
    <button className="download_cta_btns">
      <div className="cta_txt_container">
        <img src={props.icon} alt="icon" />
        <p>
          {props.txt1} <br />
          {props.txt2}
        </p>
      </div>
    </button>
  );
};
const DownloadAppSection = () => {
  return (
    <div className="download_app_section">
      <div className="dwnAppSec_txt_ctaBtn_container">
        <h1>Download <br /> our App</h1>
        <article>
          With intuitive search features and a curated selection of properties
          tailored to your preferences, finding your dream home has never been
          easier. Join thousands of satisfied users who have unlocked the key to
          their ideal living space with just a tap.
        </article>
        <div className="dwnAppSec_cta_btn_container">
          <DownloadCtaBtns
            icon={appleIcon}
            txt1="Download on the"
            txt2="Apple Store"
          />
          <DownloadCtaBtns
            icon={playStoreIcon}
            txt1="Get in on"
            txt2="Google Play"
          />
        </div>
      </div>
      <div className="dwnAppSec_img_container">
        <img src={mobilePhoneImg} alt="mobile phone" />
      </div>
    </div>
  );
};
export default DownloadAppSection;
