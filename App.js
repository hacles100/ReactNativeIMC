import { StyleSheet, View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import Title from './src/Components/Title/';
import Form from './src/Components/Form';


export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

    <View style={styles.container}>
      <Title />
      <Form />
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop: 80
  },
});
