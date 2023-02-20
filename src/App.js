import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import ToDoCard from './components/ToDoCard/ToDoCard';
import SaveToDo from './components/SaveToDo/SaveToDo';
import ToDoCounter from './components/ToDoCounter/ToDoCounter';

const App = () => {

    const [toDoList, setToDoList] = useState([]);

    return (
        <View style={styles.container}>
            <ToDoCounter toDoList={toDoList} />

            <View style={styles.list}>
                {
                    toDoList.map((item,index) =>
                        (<ToDoCard key={index} id={item.id} toDo={item.toDo} isDone={item.isDone} toDoList={toDoList} setToDoList={setToDoList} />))
                }
            </View>

            <SaveToDo toDoList={toDoList} setToDoList={setToDoList} />
        </View>

    )
}

export default (App);

const styles = StyleSheet.create({
    container: {
        flex: 10,
        backgroundColor: '#1c1c1c',
    },
    list: {
        flex: 10,
    },
});

