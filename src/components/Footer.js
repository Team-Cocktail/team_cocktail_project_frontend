import React from "react";
import logo from '../images/white tippl logo.png';


import './Footer.css';

class Footer extends React.Component {
    render() {
        return (

            <footer >
               
                <ul className="row" style={{marginBottom:"-100px"}}  >
                    <div className="col-lg-6 sm-6" style={{marginTop:"2px",marginBottom:"-20"}}>

                        
                            <a href="https://www.instagram.com/tipplapp/" target="_blank">
                                <i className="fab fa-instagram fa-sm white-text mr-md-5 mr-2 fa-2x"> </i></a>
                        </div>

                        <div className="col-lg-6 sm-6" style={{alignSelf:"right"}}>

                            <div className="footer-copyright  text-uppercase text-center ">© 2019
    <a href="https://mdbootstrap.com/education/bootstrap/"> Tippl.com</a>

                        </div>
                        </div>
                    
                </ul>

            </footer>




           
           
           
           
           
           
           
           
           
            /* footer test 2 */
            // <footer className="page-footer">


            // <div className="footer-copyright text-center bg-secondary pt-3 pb-3 mt-6 mb-6 ">© 2019:
            // <img src={logo} width="150" class="img-fluid"
            //         alt="tippl"/>

            // </div>
            // <div className="page-footer-custom footer-logo text-center pt-3 pb-3 mt-6 mb-6 ">
            // <img src={logo} width="150" class="img-fluid"
            //     alt="tippl" />
            //     </div>


            // </footer>



            /* <footer className="container-fluid">

              <nav className="navbar navbar-default">
                 <div className="navbar-header">

                      <div className="brand2">
                          <a href="...">
                              <img className="img-responsive" src={photo} alt="Responsive image" />
                             <img src={logo} width="90"/>

                            <h4 className="navbar-text">© 2019</h4>
                          </a>

                    </div>
                 </div>

            </nav>

        </footer>  */
        );
    }
}

export default Footer;