import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native";

const Screen5 = () => {
    
    const [name, setName] = useState("");

    return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Hola + name"
        onChangeText={name => setName(name)}
        defaultValue={name}
      />
        </View>
    
    )

}

export default Screen5;