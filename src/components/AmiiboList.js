import React, {Component} from "react";
import "./AmiiboList.css";
import Amiibo from './Amiibo'


class AmiiboList extends Component {
    constructor(props) {
        super(props);
        this.state = { amiiboArray: [], pageNumber: 1, pageStart: 0, pageEnd: 50}
        this.itemsPerPage = 50;
    }

    nextPage = () => {
        if(this.state.pageEnd < this.props.amiibo.length) {
            this.setState({
            pageStart: this.state.pageStart + this.itemsPerPage,
            pageEnd: this.state.pageEnd + this.itemsPerPage
            });
        }
    }

    previousPage = () => {
        if(this.state.pageStart > 0) {
            this.setState({
              pageStart: this.state.pageStart - this.itemsPerPage,
              pageEnd: this.state.pageEnd - this.itemsPerPage
            });
        }
    }

    render(){
        this.state.amiiboArray = this.props.amiibo.slice(this.state.pageStart,this.state.pageEnd).map(item => {
          return (
            <div key={item._id}>
              <Amiibo
                className="amiibo-name"
                name={item.name}
                gameSeries={item.gameSeries}
                character={item.character}
                type={item.type}
              ></Amiibo>
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
                    className="page-nav-previous btn btn-primary"
                    onClick={this.previousPage}
                  >
                    Previous
                  </button>
                  <div className="space-five"></div>
                  <button
                    className="page-nav-next btn btn-primary"
                    onClick={this.nextPage}
                  >
                    Next
                  </button>
                </div>
                <div className="amiibo-list">{this.state.amiiboArray}</div>
                <div className="page-nav">
                  <button
                    className="page-nav-previous btn btn-primary"
                    onClick={this.previousPage}
                  >
                    Previous
                  </button>
                  <div className="space-five"></div>
                  <button
                    className="page-nav-next btn btn-primary"
                    onClick={this.nextPage}
                  >
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

export default AmiiboList