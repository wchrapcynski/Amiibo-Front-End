import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Amiibo.css";
import "./AmiiboSearchReleaseNA.css";

class AmiiboSearchReleaseNA extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], searchRelease: "", isLoading: false };
  }

  searchByRelease = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.apiURL + "/releaseNA/" + this.state.searchRelease, {})
      .then(res => res.json())
      .then(res => {
        console.log("Got it!", res);
        this.setState({
          searchArray: res,
          isLoading: false
        });
        console.log(this.state.searchArray);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  setRelease = event => {
    this.setState({ searchRelease: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="amiibo-search-release form-group">
          <form className="form-inline">
            <input
              type="text"
              placeholder="By Release Date"
              onChange={this.setRelease}
              className="form-control"
            />
            <div className="space-five"></div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.searchByRelease}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AmiiboSearchReleaseNA;
