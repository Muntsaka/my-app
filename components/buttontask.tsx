
import React from 'react';
import { Button, Text, View } from 'react-native';

const ButtonTask = (props:{onPress?:()=>void, color:string, text:string}) => {
return(
  <View>
      <Button
        title="Afegeix"
        onPress={props.onPress} style={{backgroundColor:"blue", padding:10, margin:10}}
      />
    <Text style={{color:props.color}}>{props.text}</Text>
  </View>)
}


export default ButtonTask;
