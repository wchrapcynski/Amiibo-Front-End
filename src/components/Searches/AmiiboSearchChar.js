import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Amiibo.css";

class AmiiboSearchChar extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], searchCharacter: "", isLoading: false };
  }

  searchByCharacter = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.apiURL + "/character/" + this.state.searchCharacter, {})
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

  setCharacter = event => {
    this.setState({ searchCharacter: event.target.value });
  };

  render() {
    return (
      <div className="amiibo-search">
        <div className="amiibo-search-character">
          <form>
            <input
              type="text"
              placeholder="Search by Character"
              onChange={this.setCharacter}
            />
            <button type="submit" onClick={this.searchByCharacter}>
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AmiiboSearchChar;
