
import React from 'react';
function Info (props){
    return (
      <div style={{border:'1px solid black',
                   margin:'15px',width:'20%'}}>
         
  <p> {props.name} </p>
    
         
  <p> {props.author}</p>
    
       </div>
    
    )
  }
  export default Info;