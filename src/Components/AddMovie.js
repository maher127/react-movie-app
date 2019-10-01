import React, { Component } from "react";
import { addMovie } from "../Actions/MovieActions";
import { connect } from "react-redux";
import uuid from "uuid";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

class AddMovie extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  ajout = () => {
    this.props.ajoutMovie({ ...this.state, id: uuid(), modal: false });
    this.toggle();
  };
  render() {
    return (
      <div>
        <button className="btn btn-outline-primary mx-2 " onClick={this.toggle}>
          {this.props.buttonLabel}Add Movie
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
                  onChange={this.handleChange}
                  placeholder="Movie Name"
                  name="name"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Image</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  onChange={this.handleChange}
                  placeholder="Url image"
                  name="image"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Rating</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  name="rating"
                  onChange={this.handleChange}
                  placeholder="Start Rating"
                />
              </div>
              <div className="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  onChange={this.handleChange}
                  name="description"
                ></textarea>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.ajout}>
              Add
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
const mapDispatchToProps = dispatch => {
  return {
    ajoutMovie: newMovie => dispatch(addMovie(newMovie))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddMovie);
