import React, { useState } from "react";
import "../Amiibo.css";
import "./AmiiboSearchName.css";

function AmiiboSearchName(props) {
  const [searchName, setSearchName] = useState("");

  const searchByName = event => {
    event.preventDefault();
    fetch(props.apiURL + "name/" + searchName)
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  const setNameHandler = event => {
    setSearchName(event.target.value);
  };

  return (
    <div>
      <div className="amiibo-search-name form-group">
        <form className="form-inline">
          <input
            type="text"
            placeholder="By Name"
            onChange={setNameHandler}
            className="form-control input-search"
          />
          <div className="space-five"></div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={searchByName}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default AmiiboSearchName;
