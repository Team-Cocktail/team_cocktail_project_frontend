import React from 'react';
// import App from 'App';
import logo from './images/temp cocktail logo.png';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import moment from 'moment';
// import Footer from './components/Footer';
//  import Greet from './components/Greet';

 import FeedBack from './components/FeedBack';



/*import logo from './logo.svg';*/
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedBacks: []
    }
  }
  addFeedBackToList = (feedBack) => {
    let feedBacks = this.state.feedBacks;

    feedBacks.push(FeedBack);
    this.setState({ feedBacks: feedBacks });
  }
  render() { 
  
  return (
    <div className="App">
    <h6 className="fas fa-calendar-alt">
    ({moment().format("dddd Do MMMM")})
</h6>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        <i className="fas fa-leaf"></i>
          .Greeting.
          <i className="fas fa-leaf"></i>
          </p>
        <a
        
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
       
      </header>
      <FeedBack newFeedBack={this.addFeedBackToList}/>
     </div> 
     
     
  );
}
}

export default App;
