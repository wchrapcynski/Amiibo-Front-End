import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Amiibo.css";
import "./AmiiboEditUpdateAdd.css";

class EditUpdateAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { editID: ""};
    this.data = {
      name: "",
      character: "",
      gameSeries: "",
      amiiboSeries: "",
      type: "",
      image: "",
      release: ""
    };
    this.idPlaceholder = "ID (Required)";
  }

  editByID = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.baseURL + "id/" + this.state.editID, {
      method: "PUT",
      body: JSON.stringify(this.data),
      headers: { "Content-Type": "application/json" }
    })
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  AddNew = event => {
    event.preventDefault();
    this.setState({ isLoading: true });
    fetch(this.props.baseURL, {
      method: "POST",
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

  setUpdateData = event => {
    if (event.target.value !== "") {
      this.data = { ...this.data, [event.target.name]: event.target.value };
    } else {
      this.data = { ...this.data, [event.target.name]: "" };
    }
  };

  componentDidMount = () => {
    if(this.props.id) {
      this.setState({editID: this.props.id})
      this.idPlaceholder = this.props.id;
      fetch(this.props.baseURL + "id/" + this.props.id, {
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
    }
  }

  render() {
    return (
      <div>
        <div className="amiibo-search-ID">
          {this.props.edit ? "Edit" : "Add"}
          <form className="form-inline">
            <div className={this.props.edit ? "form-group" : "hide"}>
              <input
                type="text"
                placeholder={this.idPlaceholder}
                onChange={this.setID}
                className="form-control"
                style={{ width: "290px" }}
              />
              <div className="space-five"></div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={this.editByID}
              >
                Edit
              </button>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={this.setUpdateData}
                className="form-control"
                style={
                  this.props.edit ? { width: "350px" } : { width: "289px" }
                }
              />
              <div className="space-five"></div>
              <button
                className={`btn btn-primary ${this.props.edit ? "hide" : ""}`}
                type="submit"
                onClick={this.AddNew}
              >
                Add
              </button>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="character"
                placeholder="Character"
                onChange={this.setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="gameSeries"
                placeholder="Game Series"
                onChange={this.setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="amiiboSeries"
                placeholder="Amiibo Series"
                onChange={this.setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="type"
                placeholder="Amiibo Type (Card/Figure)"
                onChange={this.setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                onChange={this.setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="release"
                placeholder="NA Release Date (format: YYYY-MM-DD)"
                onChange={this.setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditUpdateAdd;
