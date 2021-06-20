import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native";

const Screen5 = () => {
    
    /**
     * const [nomde l'estat, nom de la funció per canviar l'estat] = useState(variable inicial);
     */
    const [name, setName] = useState("");

    return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Escriu el teu name"
        onChangeText={name => setName(name)}
        defaultValue={name}
      />
      <Text>Hola {name}</Text>
    </View>
    
    )

}

export default Screen5;