import React from "react";
//  import logo from '../images/tasq_logo_6.png';

class Footer extends React.Component {
    render() {
        return (
            <div className="row taskrow">
            <footer className="footer">
            <div className="col-12 col-md-6 col-lg-6">
            <button type="button" className="btn btn-danger btn btn-lg m-1">
            Rating
     </button>
        </div>
        <div className="col-12 col-md-6 col-lg-6">
            <button type="button" className="btn btn-primary btn btn-sm m-1">
                difficulty
         </button>
          
        </div>  
          
          
            <nav className="navbar navbar-default">
                    <div className="navbar-header">
                        <div className="brand">
                            <a href="...">
                    <img className="img-responsive" src={logo} width="95" height="35" alt="" />
                            </a>
                            <h4 className=" navbar-text">© 2019</h4>
                        </div>
                    </div>
                    
                </nav>

            </footer>
            </div>
        );
    }
}

export default Footer;