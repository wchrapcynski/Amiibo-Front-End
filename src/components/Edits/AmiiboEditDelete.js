import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Amiibo.css";
import "./AmiiboEditDelete.css";

class EditDelete extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], editID: "", isLoading: false };
    this.data = {};
  }

  render() {
    return (
      <div>
        <div className="amiibo-search-ID">
          
        </div>
      </div>
    );
  }
}

export default EditDelete;
