import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";
import AmiiboList from "./components/AmiiboList";
import AmiiboSearch from "./components/AmiiboSearch";
import AmiiboEdit from "./components/AmiiboEdit";

function App() {
    const [isLoading, setIsLoading] = useState(false)

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
                <Route
                  path="/add"
                  render={routerProps => (
                    <AmiiboEdit {...routerProps} {...this.state} />
                  )}
                />
              </div>
            </div>
        );
}