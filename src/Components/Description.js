import React, { Component } from "react";
import { connect } from "react-redux";
class Description extends Component {
  state = {};

  componentDidMount = () => {
    this.setState({
      ...this.props.movies.filter(
        movie => movie.id === this.props.match.params.id
      )[0]
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto my-4">
            <div className="row d-flex align-items-center">
              <div classNames="col-md-6">
                <img
                  src={this.state.image}
                  alt="s"
                  style={{ height: "279px" }}
                ></img>
              </div>
              <div classNames="col-md-6 align-self-center">
                <div className="mx-auto ">
                  <p className="ml-3 my-3 ">{this.state.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.MoviesReducer
  };
};
export default connect(mapStateToProps)(Description);
