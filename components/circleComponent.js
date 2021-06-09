import React from 'react';
import { View } from 'react';


const Circle = ({bgColor}) => {
return (
<View style={{backgroundColor: bgColor, height: 60, width: 60, justifyContent: "center",
borderRadius: 60 / 2,}}>
</View>
)
}
    export default Circle;