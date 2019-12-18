import React from 'react';
// import App from 'App';
import logo from './images/temp cocktail logo.png';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import moment from 'moment';
import CocktailByName from './components/CocktailByName';
// import Footer from './components/Footer';
  //import Greet from './components/Greet';
/*import logo from './logo.svg';*/
import './App.css';


const axios = require('axios');

class App extends React.Component {
  
cocktailByName=(cocktailName)=>{
  console.log("hello")
  axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getcocktailbyname/' + cocktailName)
      .then((response) => {
        // handle success
        console.log(response.data);
        this.setState({
          // tasks: response.data.tasks
          cocktailDetails: response.data.cocktails
        }, ()=> {
          console.log("Cocktail Details  " , this.state.cocktailDetails);
        })
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
}


    render() {
  
      // const items =[];
  
  
  return (
    <div className="App">
    < CocktailByName getCocktailFunc={this.cocktailByName}/> 
    ({moment().format("dddd Do MMMM")})

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
     
     </div> 
     
     
  );
  }

}
export default App;
