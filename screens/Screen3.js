
import React from 'react'
import CircleComponent from '../components/CircleComponent';


const Screen3 = ({ }) => {

  const CircleArray = () => {
    const array = [];
    for (let i=0; i<100; i++){
      if(i%2==0){
        const newcircle = {color:"blue"};
        array.push(newcircle);
      } else{
        const newcircle = {color:"green"};
        array.push(newcircle);
      }
    }

  return array
}

return (CircleArray().map((element) => <CircleComponent bgColor={element.color} />)
);
};

export default Screen3;