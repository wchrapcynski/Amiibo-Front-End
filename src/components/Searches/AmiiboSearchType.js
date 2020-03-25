import React, { useState } from "react";
import "../Amiibo.css";
import "./AmiiboSearchType.css";

function AmiiboSearchType(props) {
  const [searchType, setSearchType] = useState("");

  const searchByType = event => {
    event.preventDefault();
    fetch(props.apiURL + "type/" + searchType, {})
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  const setTypeHandler = event => {
    setSearchType(event.target.value );
  };

  return (
    <div>
      <div className="amiibo-search-type form-group">
        <form className="form-inline">
          <input
            type="text"
            placeholder="By Type"
            onChange={setTypeHandler}
            className="form-control input-search"
          />
          <div className="space-five"></div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={searchByType}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default AmiiboSearchType;
