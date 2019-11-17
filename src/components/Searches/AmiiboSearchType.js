import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Amiibo.css";
import "./AmiiboSearchType.css";

class AmiiboSearchType extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], searchType: "", isLoading: false };
  }

  searchByType = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.apiURL + "/type/" + this.state.searchType, {})
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.setState({
          searchArray: res,
          isLoading: false
        });
        this.props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  setType = event => {
    this.setState({ searchType: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="amiibo-search-type form-group">
          <form className="form-inline">
            <input
              type="text"
              placeholder="By Type"
              onChange={this.setType}
              className="form-control"
            />
            <div className="space-five"></div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.searchByType}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AmiiboSearchType;
