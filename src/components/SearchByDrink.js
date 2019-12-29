import React from "react";

class SearchByDrink extends React.Component {
    state = {
        newDrink1: "",
        newDrink2: "",
        newDrink3: ""

    }

    updateDrink1 = (event) => {
        this.setState({
          newDrink1: event.target.value
        })
      }

    updateDrink2 = (event) => {
        this.setState({
          newDrink2: event.target.value
        })
      }

    updateDrink3 = (event) => {
        this.setState({
          newDrink3: event.target.value
        })
      }

      handleClick = () => {
        
        if (this.state.newDrink1 === "") {
          alert("ERROR: You must enter at least something in Drink 1");
        }

        this.setState({
         
        });
      };


    render() {
        return (
          <section> 
            <div className="row paddingabove">
                <div className="col-4 col-lg-4">
                    <p>Drink 1 </p>
                </div>
                <div className="col-4 col-lg-4">
                    <p>Drink 2 </p>
                </div>
                <div className="col-4 col-lg-4">
                    <p>Drink 3 </p>
                </div>
            </div>
            <div className="row">
                <div className="col-4 col-lg-4">
                    <input
                        id="drink1Input"
                        type="text"
                        className="form-control"
                        placeholder="Drink 1"
                        value={this.state.newDrink1}
                        onChange={this.updateDrink1} />
                </div>
                <div className="col-4 col-lg-4">
                    <input
                        id="drink2Input"
                        type="text"
                        className="form-control"
                        placeholder="Drink 2"
                        value={this.state.newDrink2}
                        onChange={this.updateDrink2} />
                </div>
                <div className="col-4 col-lg-4">
                    <input
                        id="drink3Input"
                        type="text"
                        className="form-control"
                        placeholder="Drink 3"
                        value={this.state.newDrink3}
                        onChange={this.updateDrink3} />
                </div>
            </div>
            <div className="row paddingbelow">
                <div className="col-3 col-lg-3" />
                <div className="col-9 col-lg-9">
                    <button className="btn btn-warning"
                        onClick={this.handleClick}>Search
                    </button>
                </div>
            </div>
        </section>
    );
    };
}

export default SearchByDrink;





