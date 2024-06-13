const cardImg1 = "cardImg1";
const cardImg2 = "cardImg2";
const cardImg3 = "cardImg3";
const cardImg4 = "cardImg4";
const cardImg5 = "cardImg5";
const Card = (props) => {
  console.log(props.img);
  return (
    <div className={`find_homes_card ${props.img}`}>
      <div className="card_title_container">
        <h6>{props.property} property</h6>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
};
const FindHomesSection = () => {
  return (
    <div className="find_homes_section">
      <div className="find_homes_title">
        <h1>Find homes in popular neighbourhooods</h1>
        <h3>Apartments in Lekki, Obalende, Agege & Yaba</h3>
      </div>
      <div className="find_homes_cards_container">
        <Card img={cardImg1} title="Lekki" property="8" />
        <Card img={cardImg2} title="Agege" property="2" />
        <Card img={cardImg3} title="Gbagada" property="11" />
        <Card img={cardImg4} title="Obalende" property="45" />
        <Card img={cardImg5} title="Yaba" property="12" />
      </div>
    </div>
  );
};
export default FindHomesSection;
