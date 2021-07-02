
import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

const ButtonTask = (props:{onPress?:()=>void, color:string, text:string, pos:number}) => {
return(
  <View style= {{margin:10, flex: 1, flexDirection: "row", backgroundColor:"grey"}}>
    <Text style={{color:props.color}}>{props.pos + "-" + props.text} </Text>
      <TouchableOpacity onPress={props.onPress} ><Text>Esborra</Text>
      </TouchableOpacity>
  
  </View>)
}


export default ButtonTask;
