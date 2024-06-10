import heartIcon from "../assets/heart icon.svg" 
const FeaturedCards = (props) => {
  return (
    <div className="cards">
      <div className="img_container">
        <img src={props.img} alt="display card" />
      </div>
      <div className="title_container">
        <h4 className="card_title">{props.title}</h4>
        <img src={heartIcon} alt="heart icon" />
      </div>
      <div className="details_btn_container">
        <button>{props.cardDetails1}</button>
        <button>{props.cardDetails2}</button>
        <button>{props.cardDetails3}</button>
      </div>
      <p className="card_pricing_perYear">{props.priceRangePerYear}</p>
    </div>
  );
};
export default FeaturedCards;
