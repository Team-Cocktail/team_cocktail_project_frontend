import React from 'react';
import logo from '../images/white tippl logo.png';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

import './Header.css';

import moment from 'moment';

class Header extends React.Component {
    render() {
        return (
        

           
           
           
           
            // <header className="header">
            //     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            //         <a className="navbar-brand" href="#">
            //             <img src={logo} width="100" height="100" alt="" />
            //         </a>

            //         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
            //             aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            //             <span className="navbar-toggler-icon"></span>
            //         </button>

            //         <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            //             <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            //                 <li className="nav-item active">
            //                     <a className="nav-link" href="#">HOME <span className="sr-only">(current)</span></a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link" href="#">RECIPES</a>
            //                 </li>
            //                 <li className="nav-item">
            //                     <a className="nav-link disabled" href="#">FAVOURITES</a>
            //                 </li>
            //             </ul>

            //             <form className="form-inline my-2 my-lg-0">
            //                 <input className="form-control mr-sm-2" type="search" placeholder="Search"></input>
            //                 <button className="btn btn-outline-tasq my-2 my-sm-0" type="submit">Search</button>
            //             </form>
            //         </div> 


            //     </nav>
            //     </header>

                /* 2nd HEADER */

            /* <nav className="navbar navbar-expand-lg navbar-light ">
                    <a className="navbar-brand" href="#">
                        <img src={logo} width="100" height="100" alt="" />
                    </a>
                    <div className="collapse navbar-collapse w-100 order-1 order-lg-0" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Recipes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Favourites</a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="d-flex w-100 order-0">
                        <div className="w-100">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        {/* <a className="navbar-brand text-center w-100" href="#">Navbar</a> */
                        /* <span className="w-100"></span>
                    </div>
                    <span className="w-100"></span>
                </nav>*/
            // </header> 

                                                /* 3rd HEADER */

        // < !--NAVBAR-- >
            
        
        
        
        
        <div className="container" style={{color:"black"}}>
        
        
        
        
        
        <nav className="navbar navbar-custom navbar-expand-sm py-1 navbar-dark bg-dark shadow-sm" >
        <div className="container-fluid"style={{height:"45px"}}>
                    <a href="#" className="navbar-brand navbar-custom navbar-text" alt="Responsive image">
                        {/* <!-- Logo Image --> */}
                        <img src={logo} width="180" height ="50 "alt="" className="d-inline-block align-middle mr-1" fluid/>
                            {/* <!-- Logo Text --> */}

                                {/* <span className="text-uppercase font-weight-bold">Company</span> */}
                </a>

                

                    //  {/* <button type="button" 
                    
                    //   data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>

                    //          <div id="navbarSupportedContent" className="collapse navbar-collapse">
                        {/* <a className="ins-ic">
                            <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-3x"> </i>
                        </a> */}
                       
                      
                         </div>
                         </nav>
                         
                         <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/22/13/gin-cocktails.jpg?w968" height="90"width="460"/>
                        
                        
                        
                        
                        
                         
                  
{<ul className="navbar"style={{color:"white" ,paddingbottom:"0px"}}>
                            
<li className="nav-item " >
<a href="#" className="nav-link">HOME <span className="sr-only">(current)</span></a></li>

        <li className="nav-item active"><a href="https://www.bbc.co.uk/food" className="nav-link">RECIPES</a></li>
        <li className="nav-item "><a href="#" className="nav-link">FAVOURITES</a></li>
    

        </ul>}
</div>                                     




       


);
    }
}




export default Header;

