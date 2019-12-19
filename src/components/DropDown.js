import React from 'react';



class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div className="row">
       
        <div className="col-6 col-md-12"> 
        <div  className="dropdown" style = {{background:"pink",color:"green",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> NonAlcohlic </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#A">A</a></li>
         <li><a href="#B">B</a></li>
         <li><a href="#C">C</a></li>
         <li><a href="#D">D</a></li>
         <li><a href="#E">E</a></li>
         <li><a href="#F">F</a></li>
         <li><a href="#G">G</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>
       </div>
       

<hr />

<div className="col-6 col-md-12"> 
        <div  className="dropdown" style = {{background:"pink",color:"green",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu}> Alcohlic </div>

          { this.state.displayMenu ? (
          <ul>
         <li><a className="active" href="#A">Mojito</a><p>Mix everthing togather </p></li>
         <li><a href="#B">B</a><p>what is recipe</p></li>
         <li><a href="#C">C</a></li>
         <li><a href="#D">D</a></li>
         <li><a href="#E">E</a></li>
         <li><a href="#F">F</a></li>
         <li><a href="#G">G</a></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>
       </div>
       
</div>

       );
    }
  
}



export default Dropdown;