import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Amiibo.css";
import "./AmiiboEdit.css";
import Amiibo from "./Amiibo";
import AmiiboEditUpdateAdd from "./Edits/AmiiboEditUpdateAdd";
import AmiiboEditDelete from "./Edits/AmiiboEditDelete";

class AmiiboEdit extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [] };
    this.displayArray = [];
  }

  setSearchArray = res => {
    this.setState({ searchArray: [res] });
  };

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
    // console.log(this.state.searchArray);
    return (
      <div>
        <div className="amiibo-edit">
          <h1>Amiibo Edit</h1>
          <div className="amiibo-edit-display">{this.displayArray}</div>
          <div className="edit-boxes">
            <div className="edit-components">
              <AmiiboEditUpdateAdd
                apiURL={this.props.apiURL}
                array={this.state.searchArray}
                setSearchArray={this.setSearchArray}
              />
              <hr />
              Delete can not be undone!
              <AmiiboEditDelete
                apiURL={this.props.apiURL}
                array={this.state.searchArray}
                setSearchArray={this.setSearchArray}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AmiiboEdit;
