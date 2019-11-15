import React from "react";
import "./Amiibo.css";

function Amiibo(props) {

    return (
      <div className="amiibo-item">
        <div>{props.name}</div>
        <div>{props.gameSeries}</div>
        <div>{props.character}</div>
        <div>{props.type}</div>
      </div>
    );
}

export default Amiibo