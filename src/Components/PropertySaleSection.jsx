import DownloadBtn from "../Shared_Components/DownlloadBtn";
import houseImg from "../assets/house display.png";
import houseIcon_1 from "../assets/house icon 1.png";
import houseIcon_2 from "../assets/house icon 2.png";
import houseIcon_3 from "../assets/house icon 3.png";
import houseIcon_4 from "../assets/house icon 4.png";
const PropertySaleSection = ({setResidaComingSoon}) => {
  return (
    <div className="property_sale_section">
      <div className="property_heading">
        <div className="prop_heading_img_container">
          <img src={houseIcon_1} alt="house icon" />
          <img src={houseIcon_2} alt="house icon" />
          <img src={houseIcon_3} alt="house icon" />
          <img src={houseIcon_4} alt="house icon" />
        </div>
        <div className="prop_heading_txt_container">
          <h1>Do you have a property?</h1>
          <h2>Provide accommodation here in Lagos</h2>
        </div>
        <div className="property_cta_txt_btn">
          <p>
            Own a property in Lagos? Join our platform to effortlessly list your
            accommodations and connect with eager tenants seeking their perfect
            home in the vibrant city of Lagos.
          </p>
          <DownloadBtn addMargin={false} setResidaComingSoon={setResidaComingSoon}/>
        </div>
      </div>
      <div className="property_img_container">
        <img src={houseImg} alt=" house img" />
      </div>
    </div>
  );
};
export default PropertySaleSection;
