import React from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';

 class SearchCocktailByName extends React.Component {
    state = {
        drinkName: ""
}

    getCocktail = (event) => {
      
      if (this.state.drinkName=== ""){
          findAllInRenderedTree("Error:must enter cocktail name ");
    }
    this.props.searchCocktailFunc(this.state.drinkName.toLowerCase());
      
}
      updateName = (event) => {
         this.setState({drinkName: event.target.value})
    }
    
render() {
      return (
        <div className="row">
       
        <div className="col-12 col-md-8">
         
         <input
            id ="input-group"
            type="text"
        className="form-control form-control-lg"
            placeholder="Search Drink..."style={{height: "40px"}}
                  value={this.state.drinkName}
            onChange={this.updateName} />
         </div>
        
      <div className="col-12 col-md-4">
          <button type="button" style={{height: "40px"}}className="btn btn-success btn btn- sm-2" onClick={this.getCocktail}>
            Search
         </button>
         
        </div>
      </div>
    );
  }
}
        
                
            
       
    export default SearchCocktailByName;