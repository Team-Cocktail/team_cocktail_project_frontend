import React from 'react';



class Dropdown extends React.Component {
  constructor() {
    super();

    this.state = {
      displayMenu: false,
      cocktailName: "",
      cocktailRecipe: "",
      selectedCocktail: ""
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);
  };

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }
  
  handleDropdownChange(e){

  this.setState({selectedCocktail: e.target.value });
  // this.showRecipe(this.state.selectedCocktail);
  this.props.showRecipeFunc(e.target.value,"");
}

  hideDropdownMenu() {
          // set the cocktail and recipie that was clicked on
 
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      // <div>
      //     <div className="dropdown"  style={{ background: "pink", color: "green", width: "150px", align: "left" }} >
      //       <div className="button" id="tableButton" onClick={this.showDropdownMenu} > 
      //          {this.props.label} </div>       
      //         {this.state.displayMenu ? (
      //           this.props.cocktailArray.map(item => {
      //              return <div  id="cocktailList" key={item.id} value={item.name}>
      //                <a className="active" onChange={this.handleDropdownChange} href="#A">{item.name}</a>
      //               </div>
      //           })
      //         ):
      //         (null)}           
      //     </div>
      //     <div> Selected item {this.state.selectValue} </div>
      //     </div>


      <div>
        <div>
          <div>
          <div className="button" onClick={this.showDropdownMenu} > 
                {this.props.label} </div>
            <select name={this.props.label} id="dropdown" onChange={this.handleDropdownChange}>
                 {this.props.cocktailArray.map(item => {
                    return <option  key={item.id} value={item.name}> {item.name} </option>
                })}
            </select>
          </div>
        </div>
      </div>



    );
  }
}

export default Dropdown;

