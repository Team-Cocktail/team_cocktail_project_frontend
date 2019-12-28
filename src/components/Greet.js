import React from "react";
// import logo from '../images/tasq_logo_6.png';



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
        width: 350,
        padding: 60,
        borderRadius: 20,
        fontFamily: "Montserrat",
        fontcolor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexFlow: "row wrap",
        // display: [
        // '-webkit-box',
        // '-webkit-flex',
        // '-ms-flexbox',
        // 'flex'
        // ],


    }

    return (
       
        <div className="row ToDoRow top-buffer d-flex justify-content-center">
        <div className="col-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-success btn btn-sm m-1" >
            Done
</button>
    </div>    
        
        
        
        <a className="funkybutton">
 <h3 style={styles} >Good {timeOfDay}!</h3>
 </a>
        </div>

    )
}


export default Greet