import React, { Component } from "react";
import Movie from "./Movie";
import { addMovie, editMovie } from "../Actions/MovieActions";
import { connect } from "react-redux";
import AddMovie from "./AddMovie";

class MovieList extends Component {
  state = {};
  // componentDidMount() {
  //   this.setState({
  //     ...this.props.movies.filter(movie => movie.id === this.props.id)[0]
  //   });
  // }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { movies } = this.props;
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
                    <AddMovie />
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
// const mapStateToProps = state => {
//   return {
//     movies: state.MoviesReducer
//   };
// };
const mapDispatchToProps = dispatch => {
  return {
    ajout: newMovie => dispatch(addMovie(newMovie)),
    edit: movieUpdate => dispatch(editMovie(movieUpdate))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(MovieList);
