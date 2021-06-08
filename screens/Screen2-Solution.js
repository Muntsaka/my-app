
import React from 'react';
import TaleComponent from './TaleComponent-Solution';
const Screen2 = ({}) => {
  
  /*Define an array of 5 objects Tale, each tale has properties name and author*/
  const tales =  [
    {name:"Conte1", author:"Author1"}, 
    {name:"Conte2", author:"Author2"},
    {name:"Conte3", author:"Author3"},
    {name:"Conte4", author:"Author4"},
    {name:"Conte5", author:"Author5"}];

  /*Map each element of the array to a TaleComponent (created under /components) using the function map.
    TaleComponent is a component with parameters name and author and visually is a React View with two React Text inside.
    The React View has a border and a margin of 15.
  */
  return( 
   tales.map((tale) => <TaleComponent name={tale.name} author={tale.author}/>)
  );
  
};



export default Screen2;