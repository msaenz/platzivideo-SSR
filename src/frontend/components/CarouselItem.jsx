import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { setFavorite, deleteFavorite } from "../actions";
import "../assets/styles/components/CarouselItem.scss";
import playIcon from "../assets/static/play-icon.png";
import plusIcon from "../assets/static/plus-icon.png";
import removeIcon from "../assets/static/remove-icon.png";

const CarouselItem = (props) => {
  const { id, cover, title, year, contentRating, duration, isList } = props;
  const handleSetFavorite = () => {
    props.setFavorite({
      id,
      cover,
      title,
      year,
      contentRating,
      duration,
      isList
    });
  };
  const handleDeleteFavorite = (itemId) => {
    props.deleteFavorite(itemId);
  };
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title} />
      <div className="carousel-item__details">
        <div>
          <Link to={`/Player/${id}`}>
            <img
              className="carousel-item__details--img"
              src={playIcon}
              alt="Play Music"
            />
          </Link>
          {isList ? (
            <img
              className="carousel-item__details--img"
              src={removeIcon}
              alt="Remove Theme"
              onClick={() => handleDeleteFavorite(id)}
            />
          ) : (
            <img
              className="carousel-item__details--img"
              src={plusIcon}
              alt="Add Theme"
              onClick={handleSetFavorite}
            />
          )}
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  id: PropTypes.number,
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contetRating: PropTypes.string,
  duration: PropTypes.number
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite
};
//export default CarouselItem
export default connect(
  null,
  mapDispatchToProps
)(CarouselItem);
