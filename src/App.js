import React from 'react';
// import App from 'App';
import logo from './images/temp cocktail logo.png';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import moment from 'moment';
import SearchCocktailByName from './components/SearchCocktailByName';
// import Header from './components/Header';
//import Greet from './components/Greet';
/*import logo from './logo.svg';*/
import './App.css';
import DropDown from './components/DropDown';
// import Footer from './components/Footer';


const axios = require('axios');


class App extends React.Component {
  state = {
    cocktailDetails: [],
    cocktailList: []
  }

  componentDidMount() {
    //Make async request to get data
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getallcocktails/')
      .then((response) => {

        console.log(response.data);
        this.setState({
          cocktailList: response.data.cocktails
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  searchCocktailByName = (cocktailName) => {
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getcocktailbyname/' + cocktailName)
      .then((response) => {

        console.log(response.data);
        this.setState({
          cocktailDetails: response.data.cocktails
        }, () => {
          console.log("Cocktail Details  ", this.state.cocktailDetails[0].recipe);
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  getAllCocktails = () => {
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getallcocktails/')
      .then((response) => {

        console.log(response.data);
        this.setState({
          cocktailList: response.data.cocktails
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }


  render() {
    const alcoholicCocktails = this.state.cocktailList.filter(item => item.alcoholic);
    const nonAlcoholicCocktails = this.state.cocktailList.filter(item => !item.alcoholic);
    console.log(alcoholicCocktails);
    console.log(nonAlcoholicCocktails);

    return (
      <div className="App">
        ({moment().format("dddd Do MMMM")})

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <i className="fas fa-leaf"></i>
// <<<<<<< sp-team-cocktail-frontend
//             .Good afteroon!
//           <i className="fas fa-leaf"></i>
// =======
//             .Greeting.
//              <i className="fas fa-leaf"></i>
// >>>>>>> master
          </p>
          <a className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer">
          </a>
          <div className="row paddingbelow">
          {/* <hr /> */}
            <SearchCocktailByName searchCocktailFunc={this.searchCocktailByName} />
            {this.state.cocktailDetails.map(item => {
              return <p>{item.recipe}</p>
            })}
          </div>
          <div className="row paddingabove">
             <div className="col-6 col-lg-6"> 
               <ul>
                <DropDown
                  cocktailArray={alcoholicCocktails}
                  label="Alcoholic"
                />
                </ul>
              </div>
              <div className="col-6 col-lg-6"> 
               <ul>
                <DropDown
                  cocktailArray={nonAlcoholicCocktails}
                  label="Non-Alcoholic"
                />
                </ul>
              </div>
          </div>


        </header>

      </div>


    );
  }

}
export default App;
