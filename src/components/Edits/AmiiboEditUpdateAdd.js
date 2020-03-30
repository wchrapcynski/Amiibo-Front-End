  import React, { useState, useEffect } from "react";
  import { useLocation } from "react-router-dom";
  import "../Amiibo.css";
  import "./AmiiboEditUpdateAdd.css";

  function EditUpdateAdd(props) {
    const [editID, setEditID] = useState("");
    const [idPlaceholder, setIdPlaceholder] = useState("ID (Required)");
    const [data, setData] = useState({
      name: "",
      character: "",
      gameSeries: "",
      amiiboSeries: "",
      type: "",
      image: "",
      releaseNA: ""
    });
    let currentPage = useLocation();

    const setID = event => {
      setEditID(event.target.value);
    };

    console.log(props.baseURL + "id/" + props.id)
    useEffect(() => {
      if (props.id) {
        setEditID(props.id);
        setIdPlaceholder(props.id);
        fetch(props.baseURL + "id/" + props.id, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" }
        })
          .then(res => res.json())
          .then(res => {
            console.log("Got it!");
            props.setSearchArray(res);
          })
          .catch(err => {
            console.log("We've got a problem, sir.", err);
          });
      }
      // eslint-disable-next-line
    }, []);

    const editByID = event => {
      event.preventDefault();
      fetch(props.baseURL + "id/" + editID, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(res => {
          console.log("Got it!");
          props.setSearchArray(res);
        })
        .catch(err => {
          console.log("We've got a problem, sir.", err);
        });
    };

    const AddNew = event => {
      event.preventDefault();
      fetch(props.baseURL, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      })
        .then(res => res.json())
        .then(res => {
          console.log("Got it!");
          props.setSearchArray(res);
        })
        .catch(err => {
          console.log("We've got a problem, sir.", err);
        });
    };

    const setUpdateData = event => {
      if (event.target.value !== "") {
        setData({ ...data, [event.target.name]: event.target.value });
      } else {
        setData({ ...data, [event.target.name]: "" });
      }
    };

    return (
      <div>
        <div className="amiibo-edit-display">
          {currentPage.pathname === "/edit/" ? (
            <div>
              <h1>Amiibo Edit</h1>
              <h6>Enter an ID and click 'Edit'</h6>
            </div>
          ) : (
            <div>
              <h1>Amiibo Add</h1>
              <h6>Fill in information and click 'Add'</h6>
            </div>
          )}
        </div>
        <div className="amiibo-search-ID">
          <form className="form-inline">
            <div
              className={
                currentPage.pathname === "/edit/" ? "form-group" : "hide"
              }>
              <input
                type="text"
                placeholder={idPlaceholder}
                onChange={setID}
                className="form-control"
                style={{ width: "290px" }}
              />
              <div className="space-five"></div>
              <button
                className="btn btn-primary"
                type="submit"
                onClick={editByID}>
                Edit
              </button>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={setUpdateData}
                className="form-control"
                style={
                  currentPage.pathname === "/edit/"
                    ? { width: "350px" }
                    : { width: "289px" }
                }
              />
              <div className="space-five"></div>
              <button
                className={`btn btn-primary ${
                  currentPage.pathname === "/edit/" ? "hide" : ""
                }`}
                type="submit"
                onClick={AddNew}>
                Add
              </button>
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Character"
                name="character"
                onChange={setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Game Series"
                name="gameSeries"
                onChange={setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Amiibo Series"
                name="amiiboSeries"
                onChange={setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Amiibo Type (Card/Figure)"
                name="type"
                onChange={setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Image URL"
                name="image"
                onChange={setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="NA Release Date (format: YYYY-MM-DD)"
                name="releaseNA"
                onChange={setUpdateData}
                className="form-control"
                style={{ width: "350px" }}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }

  export default EditUpdateAdd;
