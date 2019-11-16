import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Amiibo.css";
import "./AmiiboSearch.css"
import AmiiboSearchName from "./Searches/AmiiboSearchName";
import AmiiboSearchChar from "./Searches/AmiiboSearchChar";
import AmiiboSearchType from "./Searches/AmiiboSearchType";
import AmiiboSearchID from "./Searches/AmiiboSearchID";
import AmiiboSearchReleaseNA from "./Searches/AmiiboSearchReleaseNA";

class AmiiboSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="amiibo-search">
        <h1>Amiibo Search</h1>
        <div className="search-boxes">
          <div className="search-boxes-left">
            <AmiiboSearchName apiURL={this.props.apiURL} />
            <AmiiboSearchChar apiURL={this.props.apiURL} />
            <AmiiboSearchType apiURL={this.props.apiURL} />
          </div>
          <div className="search-boxes-right">
            <AmiiboSearchID apiURL={this.props.apiURL} />
            <AmiiboSearchReleaseNA apiURL={this.props.apiURL} />
          </div>
        </div>
      </div>
    );
  }
}
 

export default AmiiboSearch;
