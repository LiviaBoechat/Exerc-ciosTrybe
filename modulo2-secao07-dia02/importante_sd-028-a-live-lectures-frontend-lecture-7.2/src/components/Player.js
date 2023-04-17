import React from 'react';
import './Player.css';
import { connect } from 'react-redux';

function Player({ selectedCategory, selectedMovie }) {
  return (
    <div className="player">
      <fieldset>
        <legend>Player</legend>
        <h1>{selectedCategory}</h1>
        <h2>{ selectedMovie.title}</h2>
        <h3>{selectedMovie.released}</h3>
        <iframe
          width="320"
          height="240"
          src={ `https://www.youtube.com/embed/${selectedMovie.embedId}` }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture"
          allowFullScreen
        />
      </fieldset>
    </div>
  );
}

const mapStateToProps = (state) => ({
  selectedCategory: state.movie.selectedCategory,
  selectedMovie: state.movie.selectedMovie,
});

export default connect(mapStateToProps)(Player);
