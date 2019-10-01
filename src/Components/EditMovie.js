import React, { Component } from "react";
import { editMovie } from "../Actions/MovieActions";
import { connect } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class EditMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  componentDidMount() {
    this.setState({
      ...this.props.movies.filter(movie => movie.id === this.props.id)[0]
    });
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  edit = () => {
    this.props.edit(this.state);
    this.toggle();
  };
  render() {
    return (
      <div>
        <button className="btn btn-outline-primary mx-2 " onClick={this.toggle}>
          {this.props.buttonLabel}Edit
        </button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}> Movie</ModalHeader>
          <ModalBody>
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Movie Title</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Movie Name"
                  name="name"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Image</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Url image"
                  name="image"
                  onChange={this.handleChange}
                  value={this.state.image}
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Rating</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Start Rating"
                  name="rating"
                  onChange={this.handleChange}
                  value={this.state.rating}
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="description"
                  onChange={this.handleChange}
                  value={this.state.description}
                ></textarea>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.edit}>
              Edit
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    movies: state.MoviesReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    edit: movieUpdate => dispatch(editMovie(movieUpdate))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMovie);
