import React, { useState } from "react";

const trafficLight = () => {

    const [ redLight, setredLight] = useState("red");
    const [ yellowLight, setyellowLight ]= useState("yellow");
    const [ greenLight, setgreenLight ]= useState("green");
    const [glowLight, setglowLight] = useState("glowLight")


     function redChange() {
        
         if (redLight === "red"){
          setredLight('blue' )
         }else {
          setredLight('red')
         }
      }

      function yellowChange() {
        
        if (yellowLight === "yellow"){
          setyellowLight('blue' )
        }else {
          setyellowLight('yellow')
        }
     }

     function greenChange() {
        
      if (greenLight === "green" ){
        setgreenLight('blue' )
      }else {
        setgreenLight('green')
      }
   }
	
    return (

		<div className="text-center">

            <button className={redLight} onClick= {()=>redChange()} style={{background: redLight}}>Rojo</button>
            <button className={yellowLight} onClick= {()=>yellowChange()} style={{background: yellowLight}}>Amarillo</button>
            <button className={greenLight} onClick= {()=>greenChange()} style={{background: greenLight}}>Verde</button>
			
		</div>
	);
};

export default trafficLight;