import React, { Component } from "react";

export default class Search extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search movie"
          value={value}
          onChange={event => {
            onChange(event.target.value);
          }}
        />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">
            Search
          </button>
        </div>
      </div>
    );
  }
}
