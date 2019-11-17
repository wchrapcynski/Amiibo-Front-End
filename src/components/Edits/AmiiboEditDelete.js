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

  delete = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.apiURL + "/id/" + this.state.editID, {
      method: "DELETE",
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

  render() {
    return (
      <div>
        <form className="form-inline">
          <div className="form-group amiibo-delete">
            <input
              type="text"
              placeholder="ID (Required to delete)"
              onChange={this.setID}
              className="form-control"
              style={{ width: "400px" }}
            />
            <div className="space-five"></div>
            <button
              className="btn btn-danger"
              type="submit"
              onClick={this.delete}
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditDelete;
