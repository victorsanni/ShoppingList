import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText} onPress={() => deleteItem(item.id)}>{item.text}</Text>
        </View>

    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#7EF',
    borderBottomWidth: 10
  },
  listItemView: {
    color: '#000',
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItemText: {
    color: '#000',
  }
});

export default ListItem;