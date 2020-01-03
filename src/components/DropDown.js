import React from 'react';



class Dropdown extends React.Component {
  constructor() {
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
          <div className="dropdown" style={{ background: "white", color: "black", 
             width: "200px",height:"40px", fontSize:"25px",border:"4px solid black",fontStyle:"cursive"}} >
            <div className="button"  onClick={this.showDropdownMenu}> {this.props.label} </div>
              {this.state.displayMenu ? (
                this.props.cocktailArray.map(item => {
                  return <li>
                     <a className="active" style={{fontStyle:"cursive",color:"white"}}href="#A">{item.name}
                     </a>
                 
                    </li>
                })
              ):
              (null)}                
          </div>
    );
  }
}

export default Dropdown;

