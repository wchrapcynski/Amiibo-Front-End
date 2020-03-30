import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import AmiiboList from "./components/AmiiboList";
import AmiiboSearch from "./components/AmiiboSearch";
import AmiiboEdit from "./components/AmiiboEdit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amiibo: [],
      isLoading: false,
      apiURL: "https://amiibo-api.herokuapp.com/amiibo/sorta",
      baseURL: "https://amiibo-api.herokuapp.com/amiibo/",
      edit: false,
      itemsPerPage: 10
    };
    this.pages = 0;
  }

  // Fetch from API to get list
  grabAmiiboData = url => {
    this.setState({ isLoading: true });
    fetch(url, {})
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.setState({
          amiibo: res,
          isLoading: false
        });
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  editPage = () => {
    this.setState({ edit: true });
  };

  addPage = () => {
    this.setState({ edit: false });
  };

  sortOrder = () => {
    if (this.state.apiURL === `${this.state.baseURL}sorta`) {
      this.setState({ apiURL: `${this.state.baseURL}sortd` });
      this.grabAmiiboData(`${this.state.baseURL}sortd`);
    } else {
      this.setState({ apiURL: `${this.state.baseURL}sorta` });
      this.grabAmiiboData(`${this.state.baseURL}sorta`);
    }
  };

  componentDidMount = () => {
    this.grabAmiiboData(this.state.apiURL);
  };

  render() {
    this.pages = Math.round(this.state.amiibo.length / this.state.itemsPerPage);
    if (this.state.isLoading === true) {
      return (
        <div>
          <h1>Loading (Waking up API)</h1>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="nav nav-tabs">
            <Link className="nav-item nav-link" to="/">
              Amiibo List
            </Link>
            <Link className="nav-item nav-link" to="/search">
              Search
            </Link>
            <Link
              className="nav-item nav-link"
              to="/edit/"
              onClick={this.editPage}>
              Edit
            </Link>
            <Link
              className="nav-item nav-link"
              to="/add/"
              onClick={this.addPage}>
              Add
            </Link>
          </nav>
          <div className="amiibo-list">
            <Route
              path="/"
              exact
              render={routerProps => (
                <AmiiboList
                  {...routerProps}
                  {...this.state}
                  setItemsPerPage={this.setItemsPerPage}
                  editPage={this.editPage}
                  sortOrder={this.sortOrder}
                  pages={this.pages}
                />
              )}
            />
            <Route
              path="/search/"
              render={routerProps => (
                <AmiiboSearch {...routerProps} {...this.state} />
              )}
            />
            <Route
              path="/edit/"
              render={routerProps => (
                <AmiiboEdit {...routerProps} {...this.state} />
              )}
            />
            <Route
              path="/add/"
              render={routerProps => (
                <AmiiboEdit {...routerProps} {...this.state} />
              )}
            />
          </div>
        </div>
      );
    }
  }
}

export default App;
