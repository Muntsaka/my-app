
import React from 'react'
import CircleComponent from '../components/CircleComponent';


const Screen3 = ({ }) => {


    const array = [];
    
    for (let i=0; i<100; i++){
      console.log(i)
      let newcircle;
      if(i%2==0){
        newcircle = {color:"blue", position:i};
        
      } else{
        newcircle = {color:"green", position:i};
        
      }
      console.log(newcircle)
      array.push(newcircle);
    }
  return array
}
  return(
    CircleArray().map((element) =>{return <CircleComponent bgColor={element.color} position={element.position}/>);
  )

}
export default Screen3;