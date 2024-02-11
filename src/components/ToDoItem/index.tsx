import {FC} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import moment from 'moment';

interface ToDoItemProps {
  text: string;
  color: string;
  date: number;
  delete: () => void;
  edit: () => void;
}

const GameItem: FC<ToDoItemProps> = props => {
  return (
    <View style={{...styles.container, backgroundColor: props.color}}>
      <View style={styles.firstContainer}>
        <Text style={styles.text}>{props.text}</Text>
        <Text style={styles.text2}>{moment(props.date).fromNow()}</Text>
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity onPress={props.edit}>
          <Image
            source={require('../../assets/edit.png')}
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.delete}>
          <Image
            source={require('../../assets/bin.png')}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GameItem;
