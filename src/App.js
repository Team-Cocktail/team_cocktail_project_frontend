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
    cocktailList: [],
    cocktailRecipe: "",
    cocktailName: ""
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
  showRecipe = (cocktailName) => {

    let tempRecipe = this.state.cocktailList.map(item => {
      if (item.name === cocktailName){
         return item.recipe;
      };
    })

    this.setState({
      cocktailRecipe: tempRecipe,
      cocktailName: cocktailName
    })
  }

  render() {
    const alcoholicCocktails = this.state.cocktailList.filter(item => item.alcoholic);
    const nonAlcoholicCocktails = this.state.cocktailList.filter(item => !item.alcoholic);

    return (
      <div className="App">
        ({moment().format("dddd Do MMMM")})

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <i className="fas fa-leaf"></i>
            .Greeting.
             <i className="fas fa-leaf"></i>
          </p>
          <a className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer">
          </a>
        </header>

        <div className="row paddingbelow">
            <SearchCocktailByName searchCocktailFunc={this.searchCocktailByName} />
            {this.state.cocktailDetails.map(item => {
              return <p>Recipe : {item.recipe}</p>
            })}
          </div>
          <div className="row paddingabove">
             <div className="col-6 col-lg-6"> 
               <ul>
                  <DropDown
                    cocktailArray={alcoholicCocktails}
                    label="Alcoholic"
                    showRecipeFunc={this.showRecipe}
                  />
                </ul>
              </div>
              <div className="col-6 col-lg-6"> 
               <ul>
                  <DropDown
                    cocktailArray={nonAlcoholicCocktails}
                    label="Non-Alcoholic"
                    showRecipeFunc={this.showRecipe}
                  />
                </ul>
              </div>
          </div>
          <div className="row paddingabove">
              <div className="col-12 col-lg-12"> 
                <p>To make a : {this.state.cocktailName}</p>
                <p>{this.state.cocktailRecipe}</p>
              </div>
          </div>
      </div>
    );
  }
}
export default App;
