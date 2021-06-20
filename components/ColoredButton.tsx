
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ColoredButton = (props:{onPress:()=>void, color:string, text:string}) => {
return(
  <TouchableOpacity onPress={props.onPress} style={{backgroundColor:"grey", padding:10, margin:10}} >
    <Text style={{color:props.color}}>{props.text}</Text>
  </TouchableOpacity>)
}


export default ColoredButton;

