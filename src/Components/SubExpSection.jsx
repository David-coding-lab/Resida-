import reabon from "../assets/path101.png";
import sub_img_1 from "../assets/Frame 2.png";
import sub_img_2 from "../assets/experience-pic-2.png";
import sub_img_3 from "../assets/experience-pic-3.png";
const SubExpSection = () => {
  return (
    <div className="sub_exp_section">
      <div className="sub_exp_img_container">
        <img className="reabon"src={reabon} alt="reabon" />
        <img src={sub_img_1} alt="sub experience details" />
        <img src={sub_img_2} alt="sub experience details" />
        <img src={sub_img_3} alt="sub experience details" />
      </div>
      <div className="txt_container">
        <h2>Our Experience guarantees unmatched proficiency and excellence.</h2>
      </div>
    </div>
  );
};
export default SubExpSection;
