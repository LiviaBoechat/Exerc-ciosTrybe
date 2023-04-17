import React from 'react';
import PropTypes from 'prop-types';

class VideoGame extends React.Component {
  render() {
    console.log(this.props);
    const { game: { img, title, developer } } = this.props;
    // const { img, title, developer } = this.props;

    return (
      <section className="card">
        <img src={ img } alt={ `A capa do jogo ${title}` } />
        <h1>
          { title }
        </h1>
        <p>{ developer}</p>
      </section>
    );
  }
}

VideoGame.propTypes = {
  game: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    developer: PropTypes.string,
  }),
};

VideoGame.defaultProps = {
  game: {
    img: 'https://upload.wikimedia.org/wikipedia/pt/9/9c/Minecraft_capa.png',
    title: 'Minecraft',
    developer: 'Mojang',
  },
};

export default VideoGame;
