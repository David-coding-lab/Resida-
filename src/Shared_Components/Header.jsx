import residaLogo from "../assets/Resida-logo.png";
import menu from "../assets/burger-menu-svgrepo-com.png";
const Header = ({setResidaComingSoon}) => {
  return (
    <header>
      <span className="header_left">
        <img src={residaLogo} alt="resida logo" className="logo" />
        <h1 className="resida-text">Resida </h1>
      </span>
      <span className="hand_buger_menu">
        <button className="hand_buger_btn">
          <img src={menu} alt="hand buger menu" className="hand_buger_menu" />
        </button>
      </span>
      <span className="header_right">
        <button className="header_cta_contact">Contact</button>
        <button
          className="header_cta_download-app"
          onClick={() => setResidaComingSoon(true)}
        >
          Download App
        </button>
      </span>
    </header>
  );
};
export default Header;
