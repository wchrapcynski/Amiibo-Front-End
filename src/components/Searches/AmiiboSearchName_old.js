import React, { Component } from "react";
import "../Amiibo.css";
import "./AmiiboSearchName.css";

class AmiiboSearchName extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], searchName: "", isLoading: false };
  }

  searchByName = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.apiURL + "name/" + this.state.searchName, {})
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

  setName = event => {
    this.setState({ searchName: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="amiibo-search-name form-group">
          <form className="form-inline">
            <input
              type="text"
              placeholder="By Name"
              onChange={this.setName}
              className="form-control input-search"
            />
            <div className="space-five"></div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.searchByName}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AmiiboSearchName;
