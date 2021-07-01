
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const ButtonTask = (props:{onPress?:()=>void, color:string, text:string}) => {
return(
  <View>
      <TouchableOpacity onPress={props.onPress} style={{padding:10, margin:10}}><Text>Esborra</Text>
      </TouchableOpacity>
    <Text style={{color:props.color}}>{props.text}</Text>
  </View>)
}


export default ButtonTask;
