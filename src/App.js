import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import AmiiboList from './components/AmiiboList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { amiibo: [], isLoading: false };
    this.apiURL = "http://localhost:3000/amiibo";
  }

  // Fetch from API
  grabAmiiboData = () => {
    this.setState({ isLoading: true });
    fetch(this.apiURL, { })
      .then(res => res.json())
      .then(res => {
        console.log("Got it!");
        this.setState({
          amiibo: res,
          isloading: false
        })
      })
      .catch(err => {
        console.log("We've got a problem, sir.", err)
      });
  };

  componentDidMount() {
    this.grabAmiiboData();
  }

  render() {
    // console.log(this.state.amiibo);
    return (
      <div>
        <AmiiboList data={ this.state.amiibo} />
      </div>
    );
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>This is a test</h1>
//       </header>
//     </div>
//   );
// }

export default App;
