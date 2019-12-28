import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "../Amiibo.css";
import "./AmiiboEditUpdateAdd.css";

class EditUpdateAdd extends Component {
  constructor(props) {
    super(props);
    this.state = { searchArray: [], editID: "", isLoading: false };
    this.data = {};
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

  setUpdateName = event => {
    if (event.target.value !== "") {
      this.data.name = event.target.value;
    } else {
      delete this.data.name;
    }
  };

  setUpdateChar = event => {
    if (event.target.value !== "") {
      this.data.character = event.target.value;
    } else {
      delete this.data.character;
    }
  };

  setUpdateGameSeries = event => {
    if (event.target.value !== "") {
      this.data.gameSeries = event.target.value;
    } else {
      delete this.data.gameSeries;
    }
  };

  setUpdateAmiiboSeries = event => {
    if (event.target.value !== "") {
      this.data.amiiboSeries = event.target.value;
    } else {
      delete this.data.amiiboSeries;
    }
  };

  setUpdateAmiiboType = event => {
    if (event.target.value !== "") {
      this.data.type = event.target.value;
    } else {
      delete this.data.type;
    }
  };

  setUpdateImageURL = event => {
    if (event.target.value !== "") {
      this.data.image = event.target.value;
    } else {
      delete this.data.image;
    }
  };

  setUpdateNArelease = event => {
    if (event.target.value !== "") {
      this.data.releaseNA = event.target.value;
    } else {
      delete this.data.releaseNA;
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
    console.log(this.props)
    return (
      <div>
        <div className="amiibo-search-ID">
          {this.props.edit ? "Edit" : "Add"} By ID
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
                placeholder="Name"
                onChange={this.setUpdateName}
                className="form-control"
                style={this.props.edit ? {width: "350px"} : {width: "290px"} }
              />
              <div className="space-five"></div>
              <button
                className={`btn btn-primary ${this.props.edit ? "hide" : "  "}`}
                type="submit"
                onClick={this.AddNew}
              >
                Add
              </button>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Character"
                onChange={this.setUpdateChar}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Game Series"
                onChange={this.setUpdateGameSeries}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Amiibo Series"
                onChange={this.setUpdateAmiiboSeries}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Amiibo Type (Card/Figure)"
                onChange={this.setUpdateAmiiboType}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Image URL"
                onChange={this.setUpdateImageURL}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="NA Release Date (format: YYYY-MM-DD)"
                onChange={this.setUpdateNArelease}
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
