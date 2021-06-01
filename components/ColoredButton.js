
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ColorButton = ({onPress, color}) => {
return(
  <TouchableOpacity onPress={onPress} style={{backgroundColor:"grey", padding:10, margin:10}} >
    <Text style={{color:color}}>FIXED TEXT</Text>
  </TouchableOpacity>)
}


export default ColorButton;

