import React, { useState } from "react";
import "./Amiibo.css";
import "./AmiiboSearch.css";
import Amiibo from "./Amiibo";
import AmiiboSearchName from "./Searches/AmiiboSearchName";
import AmiiboSearchChar from "./Searches/AmiiboSearchChar";
import AmiiboSearchType from "./Searches/AmiiboSearchType";
import AmiiboSearchID from "./Searches/AmiiboSearchID";
import AmiiboSearchReleaseNA from "./Searches/AmiiboSearchReleaseNA";

function AmiiboSearch(props) {
    const [searchArray, setSearchArray] = useState([])
    
    const displayArray = searchArray.map(item => {
        let date = "";
        if (item.releaseNA) {
          date = item.releaseNA.replace("T00:00:00.000Z", "");
        }
        return (
          <div key={item._id}>
            <Amiibo
              className="amiibo-name"
              name={item.name}
              gameSeries={item.gameSeries}
              character={item.character}
              type={item.type}
              image={item.image}
              id={item._id}
              amiiboSeries={item.amiiboSeries}
              releaseNA={date}></Amiibo>
          </div>
        );
      });

    return(
        <div>
        <div className="amiibo-search">
          <h1>Amiibo Search</h1>
          <h6>Search is case sensitive</h6>
          <div className="search-boxes">
            <div className="search-boxes-left">
              <AmiiboSearchName
                apiURL={props.baseURL}
                array={searchArray}
                setSearchArray={setSearchArray}
              />
              <AmiiboSearchChar
                apiURL={props.baseURL}
                array={searchArray}
                setSearchArray={setSearchArray}
              />
              <AmiiboSearchType
                apiURL={props.baseURL}
                array={searchArray}
                setSearchArray={setSearchArray}
              />
            </div>
            <div className="search-boxes-right">
              <AmiiboSearchID
                apiURL={props.baseURL}
                array={searchArray}
                setSearchArray={setSearchArray}
              />
              <AmiiboSearchReleaseNA
                apiURL={props.baseURL}
                array={searchArray}
                setSearchArray={setSearchArray}
              />
            </div>
          </div>
        </div>
        <div className="amiibo-search-display">{displayArray}</div>
      </div>
    )
}

export default AmiiboSearch