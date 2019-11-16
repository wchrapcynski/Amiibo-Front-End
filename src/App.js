import React, {Component} from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import './App.css';
import AmiiboList from './components/AmiiboList'
import AmiiboSearch from "./components/AmiiboSearch";
import AmiiboEdit from "./components/AmiiboEdit";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { amiibo: [], isLoading: false, apiURL: "http://localhost:3000/amiibo"  };
  }

  // Fetch from API to get list
  grabAmiiboData = () => {
    this.setState({ isLoading: true });
    fetch(this.state.apiURL, { })
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.setState({
          amiibo: res,
          isLoading: false
        });
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err)
      });
  };

  componentDidMount() {
    this.grabAmiiboData();
  }

  render() {
    if(this.state.isLoading == true) {
      return(
        <div>
          <h1>Loading</h1>
        </div>
      )
    } else {
      return (
        <div>
          <nav className="nav">
            <Link className="nav-link" to="/">
              Amiibo List
            </Link>
            <Link className="nav-link" to="/search">
              Search
            </Link>
            <Link className="nav-link" to="/edit">
              Edit
            </Link>
          </nav>
          <div className="amiibo-list">
            <Route
              path="/"
              exact
              render={routerProps => (
                <AmiiboList {...routerProps} {...this.state} />
              )}
            />
            <Route
              path="/search"
              render={routerProps => (
                <AmiiboSearch {...routerProps} {...this.state} />
              )}
            />
            <Route
              path="/edit"
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
