import React, { useState } from "react";

const trafficLight = () => {

     const [ color, setColor] = useState("");
     const [ redBuClass, setredBuClass] = useState("no_ilu");
     const [ yellowBuClass, setyellowBu ]= useState("no_ilu");
     const [ greenBuClass, setgreenBu ]= useState("no_ilu");

    
    

     function colorChange() {
        
         if (color == "red" ){
             setColor('color' )
         }

      }
	
    return (

		<div className="text-center">

            <button className={redBuClass} onClick= {()=>colorChange()} style={{background: color }}>Rojo</button>
            <button className={yellowBuClass} style={{background: 'yellow'}}>Amarillo</button>
            <button className={greenBuClass} style={{background: 'green'}}>Verde</button>
			
		</div>
	);
};

export default trafficLight;