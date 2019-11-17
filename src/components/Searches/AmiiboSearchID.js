import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Amiibo.css";
import "./AmiiboSearchID.css";

class AmiiboSearchID extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], searchID: "", isLoading: false };
  }

  searchByID = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.apiURL + "/id/" + this.state.searchID, {})
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

  setID = event => {
    this.setState({ searchID: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="amiibo-search-ID form-group">
          <form className="form-inline">
            <input
              type="text"
              placeholder="By ID"
              onChange={this.setID}
              className="form-control"
            />
            <div className="space-five"></div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.searchByID}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AmiiboSearchID;
