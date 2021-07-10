
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const ButtonTask = (props:{onPress?:()=>void, color:string, text:string, pos:number, complete:boolean}) => {
return(
  <View style= {{margin:10, flex: 1, flexDirection: "row"}}>
    <Text style={{color:props.text==="alert"?"red":props.color, textDecorationLine:props.complete?"line-through":"none"}}>
      {props.pos + "-" + props.text} 
    </Text>
    <TouchableOpacity onPress={props.onPress} >
      <Text>Esborra</Text>
    </TouchableOpacity>
  </View>)
}

export default ButtonTask;
