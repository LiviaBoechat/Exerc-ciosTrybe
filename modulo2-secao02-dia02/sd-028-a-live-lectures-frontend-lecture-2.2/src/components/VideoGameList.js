import React from 'react';
import PropTypes from 'prop-types';
import VideoGame from './VideoGame';

class VideoGameList extends React.Component {
  render() {
    const { games } = this.props;

    return (
      <section>
        { games.map((eachGame) => (
          <VideoGame
            key={ eachGame.id }
            game={ eachGame }
          />
        )) }
        {/* [<VideoGame game={games[0]} />, <VideoGame game={games[1]} />, <VideoGame game={games[2]}/>] */}
      </section>
    );
  }
}

VideoGameList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    developer: PropTypes.string,
  })).isRequired,
};

export default VideoGameList;
