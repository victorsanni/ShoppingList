import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from 'react-native';


const AddItem = ({addItem}) => {
  const [text, setText] = useState('');
  const onChange = textValue => setText(textValue);

  return (
    <View style={styles.additem}>
      <TextInput 
        placeholder="add item..." 
        style={styles.input}
        onChangeText={onChange} 
        />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.btnText}> Add Item </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 6,
    fontSize: 15
  },
  btn: {
    backgroundColor: '#0F0',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'yellow',
    fontSize: 20,
    textAlign: 'center',
  }
});

export default AddItem;