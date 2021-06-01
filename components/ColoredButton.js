
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ColoredButton = ({onPress, color, text}) => {
return(
  <TouchableOpacity onPress={onPress} style={{backgroundColor:"grey", padding:10, margin:10}} >
    <Text style={{color:color}}>{text}</Text>
  </TouchableOpacity>)
}


export default ColoredButton;

