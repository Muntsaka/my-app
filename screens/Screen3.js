import ReactDOM from 'react-dom'
import React from 'react'
import CircleComponent from '../components/CircleComponent';
 

const Screen3 = ({}) => 
  
class CircleComponent extends React.Component {
  render() {
    var circleStyle = {
      padding: 10,
      margin: 20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width: 100,
      height: 100
    };
    return (
      <div style={circleStyle}>
      </div>
    );
  }
}

var colors = ["#393E41", "#E94F37", "#1C89BF", "#A1D363", "#85FFC7", "#297373", "#FF8552", "#A40E4C"];

var renderData = [];

for (var i = 0; i < colors.length; i++) {
  var color = colors[i];
  renderData.push(<CircleComponent key={i + color} bgColor={color}/>);
}

ReactDOM.render(
    <div>
    {renderData}
    </div>,
    document.querySelector("#container")
  );

export default Screen3;