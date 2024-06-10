import FeaturedCards from "../Shared_Components/FeaturedCards";
import { randomNumber } from "../App";
import cardImg1 from "../assets/card house 1.png";
import cardImg2 from "../assets/card house 2.png";
import cardImg3 from "../assets/card house 3.png";
const FeaquredPropertiesSection = () => {
  return (
    <div className="Feaqured_Properties_Section">
      <div className="featured_title_container">
        <h1>Featured Properties</h1>
        <h3>
          Explore our curated selection of premier properties, meticulously
          chosen to suit every lifestyle and budget. From luxurious penthouses
          to cozy family homes, our featured listings showcase the best of Lagos
          living.
        </h3>
      </div>
      <div className="featured_items_cards_container">
        <FeaturedCards
          key={randomNumber()}
          img={cardImg1}
          title="Lillian Pepple Estate"
          cardDetails1="Duplexes"
          cardDetails2="Bungalows"
          cardDetails3="Self-Contains"
          priceRangePerYear='From NGN1,500,000/year'
        />
        <FeaturedCards
          key={randomNumber()}
          img={cardImg2}
          title="Naanchin Homes"
          cardDetails1="3 Bedrooms flats"
          cardDetails2="Bungalows"
          cardDetails3="Student Accommodations"
          priceRangePerYear='From NGN500,000/year'
        />
        <FeaturedCards
          key={randomNumber()}
          img={cardImg3}
          title="Horeb Accomodations"
          cardDetails1="Mansions"
          cardDetails2="Bungalows"
          cardDetails3=" Office spaces"
          priceRangePerYear='From NGN2,500,000/year'
        />
      </div>
    </div>
  );
};
export default FeaquredPropertiesSection;
