import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native";

const Screen5 = () => {
    
  console.log("Repintar");
    /**
     * const [nomde l'estat, nom de la funció per canviar l'estat] = useState(valor inicial);
     */
    const [name, setName] = useState("");

    return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Escriu el teu name"
        onChangeText={text =>{setName(text)}}
      />
      <Text>Hola {name}</Text>
    </View>
    
    )

}

export default Screen5;