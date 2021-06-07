
import React from 'react';
import {View, Text} from 'react-native';
import Screen2 from './screens/Screen2'

const Screen2 = () => {
  const tales = [
    {name: 'Conte1',
    author: 'Pepito1'
  },

  {name: 'Conte2',
    author: 'Pepito2'
  },

  {name: 'Conte3',
  author: 'Pepito3'
},

{name: 'Conte4',
    author: 'Pepito4'
  },

  {name: 'Conte5',
    author: 'Pepito5'
  }
];

  const list = () => {
    return tales.map((element) => {
      return (
        <View key={element.key} style={{margin: 10}}>
          <Text>{element.title}</Text>
          <Text>{element.author}</Text>
        </View>
      );
    });
  };

  return <View>{list()}</View>;
};

export default Screen2;