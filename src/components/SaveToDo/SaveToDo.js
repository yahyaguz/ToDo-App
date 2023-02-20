import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from './SaveToDo.styles';

const SaveToDo = ({ toDoList, setToDoList }) => {

    const [isActive, setIsActive] = useState(false);

    const [toDo, setToDo] = useState("");

    const AddToDo = () => {
        setToDoList([...toDoList, { "id": (Math.random().toFixed(4)), "toDo": toDo, "isDone": true }])
        setToDo("")
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Yapılacak...'
                value={toDo}
                onChangeText={setToDo}
            />

            <View style={styles.divider} />

            <Pressable onPress={AddToDo} disabled={isActive}>
                <Text style={toDo.length > 0 ? styles.button : styles.off_button} >Kaydet</Text>
            </Pressable>
        </View>
    );
};
export default SaveToDo;