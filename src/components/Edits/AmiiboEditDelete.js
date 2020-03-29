import React, { useState } from "react";
import "../Amiibo.css";
import "./AmiiboEditDelete.css";

function EditDelete(props) {
  const [editID, setEditID] = useState("");
  const [deleted, setDeleted] = useState(false)

  const deleteItem = event => {
    if (!deleted && editID) {
      event.preventDefault();
      fetch(props.apiURL + "id/" + editID, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(res => {
          console.log("Got it!");
          setDeleted(true);
          props.setSearchArray(res);
        })
        .catch(err => {
          console.log("We've got a problem, sir.", err);
        });
    }
  };

  const setID = event => {
    if (!deleted) {
        setEditID(event.target.value);
    }
  };

  return (
    <div>
      {deleted
        ? "Item has been deleted."
        : "Delete can not be undone!"}
      <form className="form-inline">
        <div className="form-group amiibo-delete">
          <input
            type="text"
            placeholder="Enter ID to be deleted"
            onChange={setID}
            className="form-control"
            style={{ width: "270px" }}
          />
          <div className="space-five"></div>
          <button
            className="btn btn-danger"
            type="submit"
            onClick={deleteItem}>
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditDelete;
