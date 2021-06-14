
import React from 'react'
import CircleComponent from '../components/CircleComponent';


const Screen3 = ({ }) => {

  const CircleArray = () => {
    const array = [];
    for (let i = 0; i < 100; i++) {
      const circle = { color1: "blue", color2: "red" };
      array.push(circle);
    }
    return array
  }

  return (CircleArray().map((element) => <CircleComponent bgColor={element.color1} bgColor={element.color2} />)
  );
}

export default Screen3;