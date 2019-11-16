import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Amiibo.css";

class AmiiboSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], searchName: "", searchCharacter: "" };
  }

  searchByName = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.apiURL + "/name/" + this.state.searchName, {})
      .then(res => res.json())
      .then(res => {
        console.log("Got it!", res);
        this.setState({
          searchArray: res
        });
        console.log(this.state.searchArray);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  setName = event => {
    this.setState({ searchName: event.target.value });
  };

  searchByCharacter = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.apiURL + "/character/" + this.state.searchCharacter, {})
      .then(res => res.json())
      .then(res => {
        console.log("Got it!", res);
        this.setState({
          searchArray: res
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
        <div className="amiibo-search-name">
          <form>
            <input
              type="text"
              placeholder="Search by Name"
              onChange={this.setName}
            />
            <button type="submit" onClick={this.searchByName}>
              Search
            </button>
          </form>
        </div>
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
 

export default AmiiboSearch;
