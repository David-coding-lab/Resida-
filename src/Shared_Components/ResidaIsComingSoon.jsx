const ResidaIsComingSoon = ({
  setContactPage,
  setShowOverlay,
  setResidaComingSoon,
}) => {
  setShowOverlay(true);
  return (
    <div className="resida_coming_Soon">
      <h1>
        Resida is <br /> coming soon!
      </h1>
      <div className="comingSoonBtnContainer">
        <button
          className="coming_soon_btn coming_soon_btn1"
          onClick={() => {
            setResidaComingSoon(false);
            setShowOverlay(false);
          }}
        >
          Ok, can't wait
        </button>
        <button
          className="coming_soon_btn coming_soon_btn2"
          onClick={() => {
            setContactPage(true);
          }}
        >
          Contact us
        </button>
      </div>
    </div>
  );
};
export default ResidaIsComingSoon;
