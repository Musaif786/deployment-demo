import React from "react";



const time = new Date().getHours();
var fname = 'Musaif.';

var greeting = '';
const bgcolor = {};
if(time >=1 && time <12 ){
    greeting = 'Good Morning';
    bgcolor.color = 'green';

}else if(time >=12 && time <16){
    greeting = 'Good Afternoon!';
    bgcolor.color = 'yellow';
}else if(time >= 16 && time < 21){
    greeting = 'Good Evening!';
    bgcolor.color = 'orange';
}else{
    greeting = 'Good Night!';
    bgcolor.color = 'black';
}


function Greeting(){
    return(
        <>
        <div className="greeting-box">  
         <h1 className="greeting-h1">Hello {fname} <span className="span " style={bgcolor}>{greeting}</span></h1>
         
        </div>
         </>
    );
}
export default Greeting;