import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl,
  Pressable,
  TextInput,
  Button,
} from 'react-native';

export default function Screen_9() {
    const [itemADD, SetItemAdd] = useState('');
    const [keyADD, SetKeyAdd] = useState(69);
    let [Items, setItems] = useState([
        { key: 1, item: 'Item 1' },
        { key: 2, item: 'Item 2' },
        { key: 3, item: 'Item 3' },
        { key: 4, item: 'Item 4' },
        { key: 5, item: 'Item 5' },
        { key: 6, item: 'Item 6' },
        { key: 7, item: 'Item 7' },
        { key: 8, item: 'Item 8' },
        { key: 44, item: 'Item 9' },
        { key: 68, item: 'Item 27' },
        { key: 0, item: 'Item 78' },
    ]);

    const [Refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setItems([...Items, { key: 69, item: 'Item 69' }]);
        setRefreshing(false);
    }
    const handleAdd = () => {
        setItems([...Items, {key:keyADD, item: itemADD}]);
    };

    return (
        <View style={styles.body}>
            <View style={styles.body5}>
            <TextInput
                style={styles.input}
                placeholder= "45"
                onChangeText={(index) => {SetKeyAdd(index);}}
                />
                <TextInput
                style={styles.input}
                placeholder= "item 45"
                onChangeText={(index) => {SetItemAdd(index);}}
                />
            <Button
                style={styles.button11}
                title = "ADD"
                onPress={handleAdd}
                />
            </View>
            <ScrollView
            style={styles.body}
            refreshControl={
                <RefreshControl
                refreshing={Refreshing}
                onRefresh={onRefresh}
                colors={['#ff00ff']}
                />
            }
            >
            {
                Items.map((object) => {
                return (
                    <Pressable
                        style={styles.item}
                        key={object.key}
                    >
                    <Text style={styles.text}>{object.item}</Text>
                    </Pressable>
                )
                })
            }
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#ffffff',
    },
    body5: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
    },
    input: {
        width: 150,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 5,
        textAlign:'center',
        fontSize: 20,
        marginBottom: 10,
      },
    item: {
      margin: 10,
      backgroundColor: '#4ae1fa',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      color: '#000000',
      fontSize: 45,
      fontStyle: 'italic',
      margin: 10,
    },
});