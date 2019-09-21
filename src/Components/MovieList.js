import React, { Component } from "react";
import Movie from "./Movie";

export default class MovieList extends Component {
  render() {
    const { movies, toAddMovie = () => {} } = this.props;
    return (
      <div>
        <div className="container">
          <div class="row">
            <div className="col-10 mx-auto my-3">
              <div className="row">
                {movies.map((el, index) => (
                  <Movie movie={el} key={index} />
                ))}
                <div className="col-lg-3 col-md-4 col-sm-6">
                  <div className="d-flex flex-column justify-content-center align-items-center card add my-2">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        toAddMovie({
                          name: prompt("New movie's name:"),
                          description: prompt("New movie's description:"),
                          rating: Number(prompt("New movie's rating:")),
                          img: prompt("image URL:"),
                          id: Math.random()
                        });
                      }}
                    >
                      Add movie
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
