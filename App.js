import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, View, FlatList } from 'react-native';
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'
import { Alert } from 'react-native';

const App = () => {
  const [items, setItems] = useState([
    {id: Math.random().toString(), text: 'Milk'},
    {id: Math.random().toString(), text: 'Bread'},
    {id: Math.random().toString(), text: 'pancakes'},
    {id: Math.random().toString(), text: 'drink'},
  ]);

  const deleteItem =(id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'back to add'})
    }
    else{
      setItems(prevItems => {
        return [{id: Math.random().toString(), text:text}, ...prevItems];
      })
    }
  }
 
  return (
    <View style={styles.container}>
      <Header />
      <FlatList 
      data={items}
      renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} />}
      />
      <AddItem addItem={addItem}/>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  }
});

