import DownloadBtn from "../Shared_Components/DownlloadBtn";
import map from "../assets/Map 1.png";
const NeighborhoodGuid = () => {
  return (
    <div className="neighborhoodGuid_section">
      <div className="nguid_img_container">
        <img src={map} alt="Guid map" />
      </div>
      <div className="nguid_txt_container">
        <div>
          <h1>Comprehensive</h1>
          <h2>Neighborhood Guides</h2>
          <article>
            The 'Neighborhood Guides' in Resida are like your friendly local
            experts, giving you the inside scoop on the vibe, hotspots, and
            quirks of each area so you can find your perfect match effortlessly!
            🏡✨
          </article>
        </div>
       <DownloadBtn addMargin={true}/>
      </div>
    </div>
  );
};
export default NeighborhoodGuid;
