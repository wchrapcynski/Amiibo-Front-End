import React, { useState } from "react";
import "../Amiibo.css";
import "./AmiiboSearchReleaseNA.css";

function AmiiboSearchReleaseNA(props) {
  const [searchRelease, setSearchRelease] = useState("");

  const searchByRelease = event => {
    event.preventDefault();
    fetch(props.apiURL + "releaseNA/" + searchRelease)
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  const setReleaseHandler = event => {
    setSearchRelease(event.target.value);
  };

  return (
    <div>
      <div className="amiibo-search-release form-group">
        <form className="form-inline">
          <input
            type="text"
            placeholder="By Date YYYY-MM-DD"
            onChange={setReleaseHandler}
            className="form-control input-search"
          />
          <div className="space-five"></div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={searchByRelease}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default AmiiboSearchReleaseNA;
