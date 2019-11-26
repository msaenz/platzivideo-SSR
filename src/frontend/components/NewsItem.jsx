import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import playIcon from "../assets/static/play-icon.png";
import "./styles/NewsItem.scss";

const NewsItem = (props) => {
  const { id, title, subtitle, cover, origin, type } = props;
  return (
    <div className="news-item">
      <img className="news-item__img" src={cover} alt={title} />
      {/* <video controls preload="none" poster={cover}>
        <source src={origin} />
      </video> */}
      <div className="news-item__details">
        <div>
          <Link to={`/player/${id}`}>
            <img
              className="news-item__details--img"
              src={playIcon}
              alt="Play Music"
            />
          </Link>
        </div>
        <p className="news-item__details--title">{title}</p>
        <p className="news-item__details--subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

// const mapDispatchToProps = {
//   setFavorite,
//   deleteFavorite,
// }

export default connect(null, null)(NewsItem);
