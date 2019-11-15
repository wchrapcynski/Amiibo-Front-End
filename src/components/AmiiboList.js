import React, {Component} from "react";
import "./AmiiboList.css";
import Amiibo from './Amiibo'


class AmiiboList extends Component {
    constructor(props) {
        super(props);
        this.state = { amiiboArray: []}
    }
    render(){
        this.state.amiiboArray = this.props.data.map(item => {
          return (
            <div key={item._id}>
              <Amiibo className="amiibo-name" 
                name={item.name}
                gameSeries={item.gameSeries}
                character={item.character}
                type={item.type}
              ></Amiibo>
            </div>
          );
        });
        return <main>{this.state.amiiboArray}</main>;
    }

}

export default AmiiboList