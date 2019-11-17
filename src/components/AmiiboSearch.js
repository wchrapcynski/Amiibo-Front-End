import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Amiibo.css";
import "./AmiiboSearch.css"
import Amiibo from "./Amiibo"
import AmiiboSearchName from "./Searches/AmiiboSearchName";
import AmiiboSearchChar from "./Searches/AmiiboSearchChar";
import AmiiboSearchType from "./Searches/AmiiboSearchType";
import AmiiboSearchID from "./Searches/AmiiboSearchID";
import AmiiboSearchReleaseNA from "./Searches/AmiiboSearchReleaseNA";

class AmiiboSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [] };
    this.displayArray = [];
  }

  setSearchArray = (res) => {
    this.setState({searchArray: res})
  }

  render() {
    this.displayArray = this.state.searchArray.map(item => {
      return (
        <div key={item._id}>
          <Amiibo
            className="amiibo-name"
            name={item.name}
            gameSeries={item.gameSeries}
            character={item.character}
            type={item.type}
          ></Amiibo>
        </div>
      );
    });
    
    return (
      <div>
        <div className="amiibo-search">
          <h1>Amiibo Search</h1>
          <div className="search-boxes">
            <div className="search-boxes-left">
              <AmiiboSearchName
                apiURL={this.props.apiURL}
                array={this.state.searchArray}
                setSearchArray={this.setSearchArray}
              />
              <AmiiboSearchChar
                apiURL={this.props.apiURL}
                array={this.state.searchArray}
                setSearchArray={this.setSearchArray}
              />
              <AmiiboSearchType
                apiURL={this.props.apiURL}
                array={this.state.searchArray}
                setSearchArray={this.setSearchArray}
              />
            </div>
            <div className="search-boxes-right">
              <AmiiboSearchID
                apiURL={this.props.apiURL}
                array={this.state.searchArray}
                setSearchArray={this.setSearchArray}
              />
              <AmiiboSearchReleaseNA
                apiURL={this.props.apiURL}
                array={this.state.searchArray}
                setSearchArray={this.setSearchArray}
              />
            </div>
          </div>
        </div>
        <div className="amiibo-search-display">{this.displayArray}</div>
      </div>
    );
  }
}
 

export default AmiiboSearch;
