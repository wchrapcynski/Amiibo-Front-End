import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Amiibo.css";
import "./AmiiboEditDelete.css";

class EditDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editID: "",
      deleted: false
    };
    this.data = {};
  }

  delete = event => {
    if (!this.state.deleted && this.state.editID) {
      event.preventDefault();
      fetch(this.props.apiURL + "id/" + this.state.editID, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(res => {
          console.log("Got it!");
          this.setState({
            deleted: true
          });
          // Sends res back to state in AmiiboSearch
          this.props.setSearchArray(res);
        })
        .catch(err => {
          console.log("We've got a problem, sir.", err);
        });
    }
  };

  setID = event => {
    if (!this.state.deleted) {
      this.setState({ editID: event.target.value });
    }
  };

  render() {
    return (
      <div>
        {this.state.deleted
          ? "Item has been deleted."
          : "Delete can not be undone!"}
        <form className="form-inline">
          <div className="form-group amiibo-delete">
            <input
              type="text"
              placeholder="Enter ID to be deleted"
              onChange={this.setID}
              className="form-control"
              style={{ width: "270px" }}
            />
            <div className="space-five"></div>
            <button
              className="btn btn-danger"
              type="submit"
              onClick={this.delete}>
              Delete
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditDelete;
