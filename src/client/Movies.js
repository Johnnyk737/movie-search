import React, { Component } from 'react'

class Movies extends Component {

  render() {
    const { movies, totalResults } = this.props
    return (
      <div className="movie-list row">
        {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <img src={movie.Poster} />
            <h3>{movie.Title}</h3>
          </div>
        ))}
      </div>
    )
  }
}

export default Movies
