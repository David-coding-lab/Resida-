import DownloadBtn from "../Shared_Components/DownlloadBtn"

const DiscoverySection = ({setResidaComingSoon})=>{
    return(
        <div className="discovery_section">
            <div className="discovery_section_content">
                <h1>
                    Discover a place you'll <br /> love to live
                </h1>
                        <DownloadBtn addMargin={true} setResidaComingSoon={setResidaComingSoon}/>
            </div>
        </div>
    )
} 
export default DiscoverySection