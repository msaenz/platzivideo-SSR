import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getVideoSource } from "../actions";
import "../assets/styles/components/Player.scss";
import NotFound from "./NotFound";

const Player = (props) => {
  const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  console.log("HasPlayer ", hasPlaying)
  useEffect(() => {
    props.getVideoSource(id);
  }, []);
  return hasPlaying ? (
    <div className="Player">
      <video controls autoPlay>
        <source src={props.playing.origin} />
      </video>
      <div className="Player-back">
        <button
          type="button"
          onClick={() => {
            props.history.goBack();
          }}
        >
          Regresar
        </button>
      </div>
    </div>
  ) : (
    <NotFound />
  );
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing
  };
};

const mapDispatchToProps = {
  getVideoSource
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
