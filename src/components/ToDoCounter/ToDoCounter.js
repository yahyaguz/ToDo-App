import React from 'react';
import { View, Text } from 'react-native';
import styles from './ToDoCounter.styles';

function ToDoCounter({ toDoList }) {

    const filteredList = toDoList.filter(item => item.isDone === true)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.counter}>{filteredList.length}</Text>
        </View>
    )
}
export default ToDoCounter;