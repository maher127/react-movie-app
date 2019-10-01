import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import EditMovie from "../Components/EditMovie";
import { connect } from "react-redux";
import { deleteMovie } from "../Actions/MovieActions";

class Movie extends Component {
  render() {
    const { movie } = this.props;
    const {
      name = "",
      rating = 1,
      year = "2019",
      image = "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png"
    } = movie;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6" key={movie.id}>
        <div className="card my-2 ">
          <div className="mx-auto">
            <StarRatingComponent name="rate1" starCount={5} value={rating} />
          </div>
          <img
            className="card-img-top img-fluid"
            src={image}
            alt="img"
            style={{ height: "279px" }}
          />
          <div className="card-body text-center">
            <div className="card-title">
              {name} {year}
            </div>
            <div>
              <Link to={`/description/${movie.id}`}>
                <button className="btn btn-outline-secondary my-3">
                  Description
                </button>
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <EditMovie id={movie.id} />
              <button
                className="btn btn-outline-danger"
                onClick={() => this.props.suprimer(movie.id)}
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return { suprimer: id => dispatch(deleteMovie(id)) };
};
export default connect(
  null,
  mapDispatchToProps
)(Movie);
