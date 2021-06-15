
import React from 'react'
import CircleComponent from '../components/CircleComponent';


const Screen3 = ({ }) => {

  const CircleArray = () => {
    const array = [{ color: "blue" }, { color: "green" }, { color: "blue" }, { color: "green" }];
    for (let i = 0; i < 100; i++) {
      if(i % 2 == 0) {
        color = "blue"
    } else {
        color = "green"
    }
    const circle = { color };
    array.push(circle);

  return array
}

return (CircleArray().map((element) => <CircleComponent bgColor={element.color} />)
);
  }
export default Screen3;