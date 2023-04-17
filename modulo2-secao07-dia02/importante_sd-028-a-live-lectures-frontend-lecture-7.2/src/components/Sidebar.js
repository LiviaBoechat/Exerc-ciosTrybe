import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Sidebar.css';
import { selectMovie } from '../redux/actions';

class Sidebar extends Component {
  render() {
    const { categories, dispatch } = this.props;
    return (
      <aside>
        {categories.map((category) => (
          <div key={ category.id }>
            <h3>{category.name}</h3>
            <ul>
              {category.movies.map((movie) => (
                <li key={ movie.id }>
                  <button
                    type="button"
                    onClick={ () => dispatch(selectMovie(movie, category.name)) }
                  >
                    Assistir
                  </button>
                  <div className="movie_title">
                    {movie.title}
                    <small>
                      {` (was released in ${movie.released})`}
                    </small>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </aside>
    );
  }
}

const mapStateToProps = (state) => ({
  categories: state.movie.categories,
});

export default connect(mapStateToProps)(Sidebar);
