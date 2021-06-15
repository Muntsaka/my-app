
import React from 'react'
import CircleComponent from '../components/CircleComponent';


const Screen3 = ({ }) => {

  const CircleArray = () => {
    const array = [{color:"blue"}, {color:"green"}, {color:"blue"}, {color:"green"}];
    for (let i = 0; i < 100; i++) {
      const circle = {color};
      const isOdd = (num)=> { return num % 2;} 
      const color = (num)=>{
           let color = 'blue';
           if(isOdd (num)) color ='blue' //even
           else color ='green' //odd
           if(isPrime(num)) color = 'orange' //prime 
        return color ;
      }
      array.push(circle);
    }
    return array
  }

  return (CircleArray().map((element) => <CircleComponent bgColor={element.color} />)
  );
}
export default Screen3;