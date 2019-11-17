import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Amiibo.css";
import "./AmiiboEditUpdate.css";

class EditUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], editID: "", isLoading: false };
    this.data = [{
      amiiboSeries: "test",
      character: "test",
      gameSeries: "test",
      image: "test",
      name: "test",
      release: [
        {
          au: "01-01-01",
          eu: "01-01-01",
          jp: "01-01-01",
          na: "01-01-01"
        }
      ],
      type: "test"
    }]
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
        // console.log(this.state.searchArray)
        this.props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  setID = event => {
    this.setState({ editID: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="amiibo-search-ID form-group">
          <form className="form-inline">
            <input
              type="text"
              placeholder="By ID"
              onChange={this.setID}
              className="form-control"
            />
            <div className="space-five"></div>
            <button
              className="btn btn-primary"
              type="submit"
              onClick={this.searchByID}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditUpdate;
