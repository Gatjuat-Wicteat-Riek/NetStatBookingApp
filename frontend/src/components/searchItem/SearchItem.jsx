import { Link } from "react-router-dom";
import "./searchItem.css";

// eslint-disable-next-line react/prop-types
const SearchItem = ({ item: {_id, cheapPrice, desc, distance, name, photos, rating} }) => {
  return (
      <div className="searchItem">
        <img src={photos[0]} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle">{name}</h1>
          <span className="siDistance">{distance}m from center</span>
          <span className="siTaxiOp">Free airport taxi</span>
          <span className="siSubtitle">
          Spacious Villas, Apartments, and Hotels with Air Conditioning
        </span>
          <span className="siFeatures">{desc}</span>
          <span className="siCancelOp">Free cancellation anytime </span>
          <span className="siCancelOpSubtitle">
           Cancel anytime, so secure this great price now!
        </span>
        </div>
        <div className="siDetails">
          {rating && <div className="siRating">
            <span>Excellent</span>
            <button>{rating}</button>
          </div>}
          <div className="siDetailTexts">
            <span className="siPrice">${cheapPrice}</span>
            <span className="siTaxOp">Includes taxes and fees</span>
            <Link to={`/hotels/${_id}`}>
              <button className="siCheckButton">See availability</button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default SearchItem;