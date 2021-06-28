import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import { TextInput } from "react-native";

interface Task{
  text:string,
}

const Screen6 = () => {

    const [task, setTask] = useState({} as Task);
    const [todoList, addTaskToList] = useState([] as Task[]);

    const addTodo = ()=>{
      addTaskToList([...todoList, task]);
    }

    return (
    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Escriu una tasca"
        onChangeText={t => setTask({text:t})}
      />
      <Button title="afegeix" onPress={addTodo} ></Button>
      {todoList.map((task, index) => {return <Text key={index}>{task.text}</Text>})}
    </View>
    
    )

}

export default Screen6;