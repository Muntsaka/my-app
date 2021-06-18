
import React from 'react'
import CircleComponent from '../components/CircleComponent';


const Screen3 = ({ }) => {

  const CircleArray = () => {
    const array = [];
    
    for (let i=0; i<100; i++){
      if(i%2==0){
        const newcircle = {color:"blue", position:1};
        array.push(newcircle);
      } else{
        const newcircle = {color:"green", position:2};
        array.push(newcircle);
      }
    }

  return array
}

return (CircleArray().map((element) => <CircleComponent bgColor={element.color} position={element.position} />)
);
};

export default Screen3;