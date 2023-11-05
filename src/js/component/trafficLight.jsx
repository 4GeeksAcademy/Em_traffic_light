import React, { useState } from "react";


const trafficLight = () => {

    const [ redLight, setredLight] = useState("red");
    const [ yellowLight, setyellowLight ]= useState("yellow");
    const [ greenLight, setgreenLight ]= useState("green");
 
    function redChange() {
      if (redLight === "red"){
        setredLight('glow')
     }else {
      setredLight('red')
      }
   }
    function yellowChange() {
          if (yellowLight === "yellow"){
            setyellowLight('glow' )
         }else {
           setyellowLight('yellow')
          }
       }
    function greenChange() {
        if (greenLight === "green"){
          setgreenLight('glow' )
        }else {
         setgreenLight('green')
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