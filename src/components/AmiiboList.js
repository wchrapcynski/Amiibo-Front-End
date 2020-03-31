import React, { useState, useEffect } from "react";
import "./AmiiboList.css";
import Amiibo from "./Amiibo";

function AmiiboList(props) {
  const [pageStart, setPageStart] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayArray, setDisplayArray] = useState([]);

  const nextPage = () => {
    if (pageStart + props.itemsPerPage < props.amiibo.length) {
      setPageStart(pageStart + props.itemsPerPage);
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (pageStart > 0) {
      setPageStart(pageStart - props.itemsPerPage);
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    let newArray = props.amiibo
      .slice(pageStart, pageStart + props.itemsPerPage)
      .map(item => {
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
    setDisplayArray(newArray);
    // eslint-disable-next-line
  }, [currentPage]);

  return (
    <div>
      <main>
        <div>
          <h1 className="amiibo-list-title">Amiibo List</h1>
          <div className="page-nav">
            <button className="btn btn-primary" onClick={props.sortOrder}>
              <i
                className={
                  props.apiURL ===
                  "https://amiibo-api.herokuapp.com/amiibo/sorta"
                    ? "fa fa-arrow-up"
                    : "fa fa-arrow-down"
                }
                aria-hidden="true"></i>
            </button>
            <div className="space-five"></div>
            <button
              className="page-nav-previous btn btn-primary"
              onClick={previousPage}>
              Previous
            </button>
            <div className="space-five"></div>
            <button
              className="page-nav-next btn btn-primary"
              onClick={nextPage}>
              Next
            </button>
            <div className="page-numbers">
              {currentPage} of {props.pages}
            </div>
          </div>
          <div className="amiibo-list">{displayArray}</div>
          <div className="page-nav">
            <button
              className="page-nav-previous btn btn-primary"
              onClick={previousPage}>
              Previous
            </button>
            <div className="space-five"></div>
            <button
              className="page-nav-next btn btn-primary"
              onClick={nextPage}>
              Next
            </button>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default AmiiboList;