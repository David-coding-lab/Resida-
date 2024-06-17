import arrow from "../assets/download arrow.png";
const DownloadBtn = (props) => {
  if (props.addMargin) {
    return (
      <button
        className="orange_download_button btnMargin"
        id="download-btn"
        onClick={() => props.setResidaComingSoon(true)}
      >
        Download app <img src={arrow} alt="arrow" />
      </button>
    );
  } else
    return (
      <button
        className="orange_download_button"
        onClick={(event) =>props.setResidaComingSoon(true)}
      >
        Download app <img src={arrow} alt="arrow" />
      </button>
    );
};

export default DownloadBtn;
