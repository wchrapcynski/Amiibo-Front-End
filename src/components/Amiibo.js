import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Amiibo.css";

function Amiibo(props) {
  let currentPage = useLocation();
  return (
    <div className="amiibo-item card">
      <div className="amiibo-image">
        <img src={props.image} className="card-img-top" alt=""></img>
      </div>
      <div className="card-body">
        <div className="card-text">Name: {props.name}</div>
        <div className="card-text">Character: {props.character}</div>
        <div className="card-text">Series: {props.gameSeries}</div>
        <div className="card-text">Amiibo Series: {props.amiiboSeries}</div>
        <div className="card-text">Type: {props.type}</div>
        <div className="card-text">Release Date: {props.releaseNA}</div>
        {currentPage.pathname === "/edit" ? (
          "ID: " + props.id
        ) : (
          <div className="card-text">
            <Link
              to={{ pathname: "/edit", amiiboId: { id: props.id } }}
              onClick={props.editPage}>
              Edit
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Amiibo;
