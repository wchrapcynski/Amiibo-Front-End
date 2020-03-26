import React, { useState } from "react";
import "./AmiiboSearchChar.css";
import "../Amiibo.css";

function AmiiboSearchChar(props) {
  const [searchCharacter, setSearchCharacter] = useState("");

  const searchByCharacter = event => {
    event.preventDefault();
    fetch(props.apiURL + "character/" + searchCharacter)
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        props.setSearchArray(res);
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err);
      });
  };

  const setCharacterHandler = event => {
    setSearchCharacter(event.target.value);
  };

  return (
    <div>
      <div className="amiibo-search-character form-group ">
        <form className="form-inline">
          <input
            type="text"
            placeholder="By Character"
            onChange={setCharacterHandler}
            className="form-control input-search"
          />
          <div className="space-five"></div>
          <button
            className="btn btn-primary"
            type="submit"
            onClick={searchByCharacter}>
            Search
          </button>
        </form>
      </div>
    </div>
  );
}

export default AmiiboSearchChar;
