import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
export default class Movie extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movie = {} } = this.props;
    const {
      title = "",
      rating = 1,
      year = "2019",
      image = "https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png"
    } = movie;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div className="card my-2 ">
          <div className="mx-auto">
            <StarRatingComponent name="rate1" starCount={5} value={rating} />
          </div>
          <img
            className="card-img-top img-fluid"
            src={image}
            style={{ height: "279px" }}
          />
          <div className="card-body text-center">
            <div className="card-title">
              {title} {year}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
