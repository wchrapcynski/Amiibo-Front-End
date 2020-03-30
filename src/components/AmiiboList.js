import React, { Component } from "react";
import "./AmiiboList.css";
import Amiibo from "./Amiibo";

class AmiiboList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amiiboArray: [],
      pageNumber: 1,
      pageStart: 0,
      pageEnd: this.props.itemsPerPage,
      currentPage: 1
    };
    this.displayArray = [];
  }

  nextPage = () => {
    if (this.state.pageEnd < this.props.amiibo.length) {
      this.setState({
        pageStart: this.state.pageStart + this.props.itemsPerPage,
        pageEnd: this.state.pageEnd + this.props.itemsPerPage,
        currentPage: this.state.currentPage + 1
      });
    }
  };

  previousPage = () => {
    if (this.state.pageStart > 0) {
      this.setState({
        pageStart: this.state.pageStart - this.props.itemsPerPage,
        pageEnd: this.state.pageEnd - this.props.itemsPerPage,
        currentPage: this.state.currentPage - 1
      });
    }
  };

  render() {
    this.displayArray = this.props.amiibo
      .slice(this.state.pageStart, this.state.pageEnd)
      .map(item => {
        let date = "";
        if (item.releaseNA) {
          date = item.releaseNA.replace("T00:00:00.000Z", "");
        }
        return (
          <div key={item._id}>
            <Amiibo
              {...this.props}
              {...this.state}
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
    return (
      <div>
        <main>
          <div>
            <h1>Amiibo List</h1>
            <div className="page-nav">
              <button
                className="btn btn-primary"
                onClick={this.props.sortOrder}>
                <i
                  className={
                    this.props.apiURL ===
                    "https://amiibo-api.herokuapp.com/amiibo/sorta"
                      ? "fa fa-arrow-up"
                      : "fa fa-arrow-down"
                  }
                  aria-hidden="true"></i>
              </button>
              <div className="space-five"></div>
              <button
                className="page-nav-previous btn btn-primary"
                onClick={this.previousPage}>
                Previous
              </button>
              <div className="space-five"></div>
              <button
                className="page-nav-next btn btn-primary"
                onClick={this.nextPage}>
                Next
              </button>
              <div className="page-numbers">
                {this.state.currentPage} of {this.props.pages}
              </div>
            </div>
            <div className="amiibo-list">{this.displayArray}</div>
            <div className="page-nav">
              <button
                className="page-nav-previous btn btn-primary"
                onClick={this.previousPage}>
                Previous
              </button>
              <div className="space-five"></div>
              <button
                className="page-nav-next btn btn-primary"
                onClick={this.nextPage}>
                Next
              </button>
            </div>
          </div>
        </main>
        <footer></footer>
      </div>
    );
  }
}

export default AmiiboList;
