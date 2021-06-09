import React from 'react';
import { View } from 'react-native';

  const circleComponent = ({bgColor}) => {
    return (
      <View style={{backgroundColor: bgColor, height:"150", width:"150", borderRadius:"150/2"}}>
      </View>
    );
    }
    export default circleComponent;