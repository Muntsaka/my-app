import React, { useState } from "react";
import { Button, Text, View } from "react-native";


const Screen5 = () => {
    
    /**
     * const [nomde l'estat, nom de la funció per canviar l'estat] = useState(variable inicial);
     */
    const [name, setName] = useState("Ramon");

    return (
        <View style={{backgroundColor:"white", height:"100%", width:"100%"}}>
            <Button title="change name" onPress={()=>{setName("Maria")}} ></Button>
            <Text>{name}</Text>
        </View>
    )

}

export default Screen5;