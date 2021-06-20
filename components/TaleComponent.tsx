
import React from 'react';
import { View, Text } from 'react-native';

  const TaleComponent = (props:{name:string, author:string}) => {
    return (
      <View style={{borderWidth:1, margin:15}}>
          <Text>{props.name}</Text>
          <Text>{props.author}</Text>
      </View>
    );
    }
export default TaleComponent;