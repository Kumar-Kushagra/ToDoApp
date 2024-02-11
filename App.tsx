import {FC} from 'react';
import {SafeAreaView,StatusBar} from 'react-native';
import MainScreen from './src/screens/mainScreen';
import styles from './src/style/styles';

const App: FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <MainScreen />
      <StatusBar backgroundColor="#36334C" />
    </SafeAreaView>
  );
};

export default App;
