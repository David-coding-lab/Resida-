import DownloadBtn from "../Shared_Components/DownlloadBtn"

const SubHero = ({setResidaComingSoon})=>{
    return(
        <div className='sub_hero_section'>
            <div className='sub_hero_text'>
                <h1 className='sub_hero_title'>
                    Resida nullifies the hassels of agents
                </h1>
                <h4 className='sub_hero_sub_title'>
                    Save properties, create alerts and keep 
                    track of the  enquires you send to agents.
                </h4>
            </div>
            <DownloadBtn addMargin={true} setResidaComingSoon={setResidaComingSoon}/>
        </div>
    )
}
export default SubHero