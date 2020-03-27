import React, { Component } from "react";
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
    this.id = this.props.location.amiiboId;
  }

  setSearchArray = res => {
    this.setState({ searchArray: [res] });
  };

  render() {
    this.displayArray = this.state.searchArray.map(item => {
      let date = "";
      if (item.releaseNA) {
        date = item.releaseNA.replace("T00:00:00.000Z", "");
      }
      return (
        <div key={item._id}>
          <Amiibo
            className="amiibo-name"
            name={item.name}
            gameSeries={item.gameSeries}
            character={item.character}
            type={item.type}
            image={item.image}
            id={item._id}
            amiiboSeries={item.amiiboSeries}
            releaseNA={date}
          ></Amiibo>
        </div>
      );
    });
    return (
      <div>
        <div className="amiibo-edit">
          <h1>Amiibo Edit</h1>
          <div className="edit-main">
            <div className="amiibo-edit-display">{this.state.searchArray.length !== 0 ? this.displayArray : this.props.edit ? "Enter an ID and click 'Edit'" : "Fill in information and click 'Add'"}</div>
            <div className="edit-boxes">
              <div className="edit-components">
                <AmiiboEditUpdateAdd
                  {...this.props}
                  array={this.state.searchArray}
                  setSearchArray={this.setSearchArray}
                  id={this.id ? this.id.id : null}
                />
                <hr />
                <AmiiboEditDelete
                  apiURL={this.props.baseURL}
                  array={this.state.searchArray}
                  id={this.id}
                  setSearchArray={this.setSearchArray}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AmiiboEdit;
