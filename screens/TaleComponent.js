
import React from 'react';
import { View, Text } from 'react-native';

  const TaleComponent = ({name, author}) => {
    return (
      <View style={{borderWidth:1, margin:15}}>
          <Text>{name}</Text>
          <Text>{author}</Text>
      </View>
    );
    }
export default TaleComponent;