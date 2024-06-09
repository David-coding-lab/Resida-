import houseTemplate from "../assets/house template.png";
const QuickPreviewSection = () => {
  return (
    <div className="quick_preview_section">
      <div className="quick_p_img_container">
        <img src={houseTemplate} alt="" />
      </div>
      <div className="quick_p_txt_container">
        <h1>Your dreame home is only a few click away</h1>
        <h2>-Find your space now</h2>
        <button className="quick_p_cta_btn">Download app </button>
      </div>
    </div>
  );
};
export default QuickPreviewSection;
