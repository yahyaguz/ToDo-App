import React from 'react';
import { Text } from 'react-native';
import styles from './ToDoCard.styles';

const ToDoCard = ({ toDoList, setToDoList, isDone, id, toDo }) => {

    const handleChangeIsDone = (id) => {
        const newList = toDoList.map(item => item.id === id ? { ...item, isDone: !item.isDone } : item)
        setToDoList(newList)
    }

    const handleDeleteToDo = (id) => {
        const newList = toDoList.filter(item => item.id !== id)
        setToDoList(newList)
    }

    return (
        <Text style={isDone ? styles.text : styles.off_text}
            onPress={() => handleChangeIsDone(id)}
            onLongPress={() => handleDeleteToDo(id)}>
            {toDo}
        </Text>
    )
}
export default ToDoCard;