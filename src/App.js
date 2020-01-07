import React from 'react';
// import App from 'App';
import logo from './images/temp cocktail logo.png';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import moment from 'moment';
import SearchCocktailByName from './components/SearchCocktailByName';
 import Header from './components/Header';
import Greet from './components/Greet';
/*import logo from './logo.svg';*/
import './App.css';
import SearchByDrink from './components/SearchByDrink';
import DropDown from './components/DropDown';
import SearchResults from './components/SearchResults';
 import Footer from './components/Footer';


const axios = require('axios');


class App extends React.Component {
  state = {
    cocktailDetails: [],
    cocktailList: [],
    cocktailByDrink: [],
    cocktailRecipe: "",
    cocktailName: ""
  }

  componentDidMount() {
    //Make async request to get data
    axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getallcocktails/')
      .then((response) => {

        this.setState({
          cocktailList: response.data.cocktails
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  };


  searchCocktailByName = (cocktailName) => {
    // axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getcocktailbyname/' + cocktailName)
    //   .then((response) => {

    //     this.setState({
    //       cocktailDetails: response.data.cocktails
    //     })
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

      let found = false;

      this.state.cocktailList.map(item =>{
        if (cocktailName === item.name.toLowerCase()) {
          this.showRecipe(item.name, item.recipe);
          found = true;
        }
      })
      if (!found) {
        
        alert("ERROR: No cocktail by this name has been found");
      }
    }

    searchCocktailByDrink = (drink1, drink2, drink3) => {
      axios.get('https://ijrb29r28l.execute-api.eu-west-2.amazonaws.com/dev/getcocktaildrink/' + drink1 + "/" + drink2 + "/" + drink3)
        .then((response) => {
  
          console.log(response.data.cocktails);

          this.setState({
            cocktailByDrink: response.data.cocktails
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
  showRecipe = (cocktailName, recipe) => {
    console.log("IN REcipe");
    let tempRecipe = "";

    if (recipe !== "") {
      tempRecipe =recipe;
    }
    else {
      tempRecipe = this.state.cocktailList.map(item => {
        if (item.name === cocktailName){
           return item.recipe;
        };
      })
    }
    this.setState({
      cocktailRecipe: tempRecipe,
      cocktailName: cocktailName
    })
    recipe = "";
    console.log(cocktailName);
  }

  render() {
    const alcoholicCocktails = this.state.cocktailList.filter(item => item.alcoholic);
    const nonAlcoholicCocktails = this.state.cocktailList.filter(item => !item.alcoholic);

    return (
      <div className="App">
  
      <Greet  />

      <div className="row" style={{marginTop:"1px",marginBottom:"-35px"}}>
      <Header />
</div>


<hr/>
        <div className="row" style={{marginTop:"1px",marginBottom:"0"}}>
            <SearchCocktailByName 
                 searchCocktailFunc={this.searchCocktailByName}
                 showRecipeFunc={this.showRecipe}
                 key="0" />
            
      
          </div>
          <hr />
          <div className="row">
            <div className="col-12 col-lg-12" style={{marginTop:"-15px",marginBottom:"-10px"}}> 
                <h3> Inspire Me</h3>
            </div>
          </div>
          <div className="row">
             <div className="col-6 col-lg-12"> 
               
                <DropDown
                  cocktailArray={alcoholicCocktails}
                  label="Alcoholic"style={{width:"120px"}}
                  showRecipeFunc={this.showRecipe}
                  key="2"
                />
                
              </div>
              <div className="col-6 col-lg-12"> 
               
                <DropDown
                  cocktailArray={nonAlcoholicCocktails}
                  label="Non-Alcoholic"
                  style={{width:"120px"}}
                  showRecipeFunc={this.showRecipe}
                  key="2"
                />
            </div>
          </div>
          <hr />
          <div className="row">
              <div className="col-12 col-lg-12" style={{marginTop:"-25px"}}> 
                 <h3> What drinks do you have? </h3>
                 <SearchByDrink
                    searchCocktailByDrinkFunc={this.searchCocktailByDrink}
                    key="3"/>
              </div>
          </div>
          
          <div className="row">
             <div className="col-6 col-lg-6" style={{marginTop:"-15px",marginBottom:"-20px"}}> 
             
             <ul>
                 <h3> <SearchResults
                    cocktailArray={this.state.cocktailByDrink}
            label="Click to see Cocktails"
                    showRecipeFunc={this.showRecipe}
                    key="4"
                  />
                </h3>
                  </ul>
                
              </div>
          </div>
          
          <hr />
          <div className="row" style={{marginBottom:"40px"}} >
              <div className="col-12 col-lg-12" style={{marginBottom:"px",marginTop:"-20px"}}> 
                <h2>To make a: {this.state.cocktailName}</h2>
                <p>{this.state.cocktailRecipe}</p>
                <hr />
               <div className="row">
                <Footer />
              </div>
          </div>
      </div>
     </div>
    );
  }
}
export default App;
