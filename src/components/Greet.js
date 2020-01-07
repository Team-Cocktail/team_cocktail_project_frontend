import React from "react";
import logo from '../images/tippl_300_x_300.png';
import moment from 'moment';

function Greet() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "evening"
    }

    //const width = '80%';
    const styles = {
        color: "#FFF",
        // backgroundColor: "#E96969",
        textAlign: "center",
        width: 250,
        height:50,
        padding: 10,
        borderRadius: 10,
        fontFamily: "Montserrat",
        fontcolor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "row wrap",
        flex:1,
        // display: [
        // '-webkit-box',
        // '-webkit-flex',
        // '-ms-flexbox',
        // 'flex'
        // ],


    }

    return (
        
        <div className="row ToDoRow top-buffer d-flex justify-content-center" style={{marginTop:"2px"}} >
            <a className="funkybutton">

<h4 style={styles} ><i className="fas fa-leaf"></i>..Good {timeOfDay}..
    <i className="fas fa-leaf"></i>
                ..({moment().format("dddd Do MMMM")})..
           </h4>   
              </a>  
        </div>
    

    )
}


export default Greet