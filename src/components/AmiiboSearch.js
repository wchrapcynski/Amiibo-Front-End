import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Amiibo.css";
import AmiiboSearchName from "./Searches/AmiiboSearchName";
import AmiiboSearchChar from "./Searches/AmiiboSearchChar";

class AmiiboSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <div className="amiibo-search">
        <AmiiboSearchName apiURL={this.props.apiURL} />
        <AmiiboSearchChar apiURL={this.props.apiURL} />
      </div>
    );
  }
}
 

export default AmiiboSearch;
