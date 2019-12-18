import React from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';

 class CocktailByName extends React.Component {
    state = {
        drinkName: ""

    }

    getCocktail = (event) => {
      
      if (this.state.drinkName=== ""){
          findAllInRenderedTree("Error:must enter cocktail name ");
    
    }
    this.props.getCocktailFunc(this.state.drinkName.toLowerCase());
      
}
      
        
    updateName = (event) => {
         this.setState({drinkName: event.target.value})
    }
    // componentWillMount = () => {
    //   this.setState({
    //       initialItems: this.props.content,
    //       items: this.props.content
    //   })
    // }

    
    
    
    
    render() {
      return (
        <div className="row">
       
        <div className="col-12 col-md-8">
         <h4>
          <input
            id ="input-group"
            type="text"
        className="form-control"
            placeholder="Search Drink..."
                  value={this.state.drinkName}
            onChange={this.updateName} />
        </h4>
        </div>
      
        <div className="col-12 col-md-4">
          <button type="button" className="btn btn-success btn sm-1" onClick={this.getCocktail}>
            Search
         </button>
         
        </div>
      </div>
    );
  }
}
        
                
            
       
    export default CocktailByName;