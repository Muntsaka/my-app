
import React from 'react';
import { Text } from 'react-native';

const ButtonTask = (props:{onPress?:()=>void, color:string, text:string}) => {
return(
  <view onPress={props.onPress} style={{backgroundColor:"blue", padding:10, margin:10}} >
    <Text style={{color:props.color}}>{props.text}</Text>
  </view>)
}


export default ButtonTask;
