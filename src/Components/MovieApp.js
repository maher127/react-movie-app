import React, { Component } from "react";
import "./MovieApp.css";
import Search from "./Search";
import StarRatingComponent from "react-star-rating-component";
import MovieList from "./MovieList";
import { connect } from "react-redux";

class MovieApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyWord: "",
      minRating: 1
    };
  }

  onStarClick = (nextValue, preValue, name) => {
    this.setState({ minRating: nextValue });
  };
  render() {
    const { movies } = this.props;
    return (
      <div>
        <header>
          <div className="container">
            <div className="col-9 mx-auto">
              <div className="row my-3">
                <div className="col-8 ">
                  <Search
                    value={this.state.keyWord}
                    onChange={newKeyWord => {
                      this.setState({ keyWord: newKeyWord });
                    }}
                  />
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="rating-filter">
                      <span className="rating-filter-text">Minimum rating</span>
                      <div className="text-center">
                        <StarRatingComponent
                          className="stars"
                          name="rate1"
                          starCount={5}
                          value={this.state.minRating}
                          onStarClick={this.onStarClick}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <MovieList
            movies={movies.filter(
              el =>
                el.rating >= this.state.minRating &&
                el.name
                  .toUpperCase()
                  .includes(this.state.keyWord.toUpperCase().trim())
            )}
          />
        </main>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.MoviesReducer
  };
};

export default connect(mapStateToProps)(MovieApp);
