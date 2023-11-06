import React, { useState } from "react";


const trafficLight = () => {

    const [ redLight, setredLight] = useState("red");
    const [ yellowLight, setyellowLight ]= useState("yellow");
    const [ greenLight, setgreenLight ]= useState("green");
 
    function redChange() {
      if (redLight == "red"){
        setredLight('glow')
        setyellowLight('yellow')
        setgreenLight('green')
     }
   }
    function yellowChange() {
          if (yellowLight == "yellow"){
            setyellowLight('glow' )
            setgreenLight('green')
            setredLight('red')
         }
       }
    function greenChange() {
        if (greenLight == "green"){
          setgreenLight('glow' )
          setredLight('red')
          setyellowLight('yellow')
            }
         }
	
    return (

		<div className="trafficLight">
      <button className={redLight} onClick= {()=>redChange()} style={{background: redLight}}></button>
      <button className={yellowLight} onClick= {()=>yellowChange()} style={{background: yellowLight}}></button>
      <button className={greenLight} onClick= {()=>greenChange()} style={{background: greenLight}}></button>
		</div>
	);
};

export default trafficLight;