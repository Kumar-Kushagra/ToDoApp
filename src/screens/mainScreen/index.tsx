import React, {useState, FC} from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import ToDoItem from '../../components/ToDoItem';

import Header from '../../components/Header';
import styles from './styles';

interface ToDoInterface {
  id: number;
  item: string;
  color: string;
}

const MainScreen: FC = () => {
  const [todoList, setToDoList] = useState<ToDoInterface[]>([]);
  const [todoItem, setToDoItem] = useState<string>('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  console.log(todoList);

  const generateColor = (): String => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const resetForm = () => {
    setToDoItem('');
    setEditIndex(null);
  };

  const handleEdit = (index: number): void => {
    setToDoItem(todoList[index].item);
    setEditIndex(index);
  };

  const handleDelete = (index: number): void => {
    Alert.alert(
      'DELETE',
      'Are you sure to delete this todo from the list?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed!'),
        },
        {
          text: 'Yes',
          onPress: () => {
            var array = [...todoList];
            array.splice(index, 1);
            setToDoList([...array]);
          },
        },
      ],
      {cancelable: false},
    );
  };

  const handleAdd = (): void => {
    if (todoItem !== '') {
      if (editIndex !== null) {
        const updatedGames = [...todoList];
        updatedGames[editIndex].item = todoItem.trim();
        setToDoList(updatedGames);
        resetForm();
      } else {
        const newToDo: ToDoInterface = {
          id: Date.now(),
          item: todoItem.trim(),
          color: generateColor(),
        };
        setToDoList([...todoList, newToDo]);
        resetForm();
      }
    } else {
      Alert.alert('Error!', 'Game Name cannot be Empty');
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Keep your favorite todos at one place</Text>
      <TextInput
        value={todoItem}
        onChangeText={setToDoItem}
        style={styles.textInput}
        placeholder="Start Making ToDo's........"
      />
      <TouchableOpacity onPress={handleAdd} style={styles.buttonView}>
        <Text style={styles.buttonText}>
          {editIndex !== null ? 'Update' : 'Add'}
        </Text>
      </TouchableOpacity>
      <View style={styles.spacing}></View>
      <FlatList
        data={todoList}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id.toString()}
        renderItem={({item, index}) => (
          <ToDoItem
            key={index}
            text={item.item}
            color={item.color}
            date={item.id}
            delete={() => handleDelete(index)}
            edit={() => handleEdit(index)}
          />
        )}
      />
      <View style={styles.spacing}></View>
    </View>
  );
};

export default MainScreen;
