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
          <main>
            <div className="page-nav">
              <div className="page-nav-previous" onClick={this.previousPage}>Previous</div>
              <div className="space-five"></div>
              <div className="page-nav-next" onClick={this.nextPage}>Next</div>
            </div>
            <div className="amiibo-list">{this.state.amiiboArray}</div>
          </main>
        );
    }

}

export default AmiiboList