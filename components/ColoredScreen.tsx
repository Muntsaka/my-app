
import React from 'react';
import { View } from 'react-native';

  const ColoredScreen = (props:{bgColor:string}) => {
    return (
      <View style={{backgroundColor: props.bgColor, height:"100%", width:"100%"}}>
      </View>
    );
    }
    export default ColoredScreen;