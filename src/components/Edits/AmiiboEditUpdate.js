import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Amiibo.css";
import "./AmiiboEditUpdate.css";

class EditUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], editID: "", isLoading: false };
    this.data = {};
  }

  searchByID = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.apiURL + "/id/" + this.state.editID, {
      method: "PUT",
      body: JSON.stringify(this.data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.setState({
          searchArray: res,
          isLoading: false
        });
        // Sends res back to state in AmiiboSearch
        this.props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  setID = event => {
    this.setState({ editID: event.target.value });
  };

  setUpdateName = event => {
    if (event.target.value !== "") {
      this.data = { name: event.target.value };
    } else {
      delete this.data.name;
    }
  };

  setUpdateChar = event => {
    if (event.target.value !== "") {
      this.data = { character: event.target.value };
    } else {
      delete this.data.character;
    }
  };

  setUpdateSeries = event => {
    if (event.target.value !== "") {
      this.data = { amiiboSeries: event.target.value };
    } else {
      delete this.data.amiiboSeries;
    }
  };

  setUpdateGameSeries = event => {
    if (event.target.value !== "") {
      this.data = { gameSeries: event.target.value };
    } else {
      delete this.data.gameSeries;
    }
  };

  render() {
    return (
      <div>
        <div className="amiibo-search-ID">
          Edit By ID
          <form className="form-inline">
            <div className="form-group">
              <input
                type="text"
                placeholder="ID"
                onChange={this.setID}
                className="form-control"
                style={{ width: "400px" }}
              />
              <div className="space-five"></div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.searchByID}
              >
                Edit
              </button>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                onChange={this.setUpdateName}
                className="form-control"
                style={{ width: "400px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Character"
                onChange={this.setUpdateChar}
                className="form-control"
                style={{ width: "400px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Game Series"
                onChange={this.setUpdateGameSeries}
                className="form-control"
                style={{ width: "400px" }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditUpdate;
