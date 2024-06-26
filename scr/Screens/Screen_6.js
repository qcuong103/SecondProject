import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export default function Screen_6() {
    const [name, setName] = useState('Mash')
    const [session, setSession] = useState({ number: 6, title: 'state' })
    const [current, setCurrent] = useState(true)
    const [counter, setCounter] = useState(0);

    const onClickHandler = () => {
        setName('Programming with Mash')
        setSession({ number: 7, title: 'Style' })
        setCurrent(false)
        setCounter(counter + 1)
    }

    return (
        <View style={styles.body}>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.text}>This is session number {session.number} and about {session.title}</Text>
        <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
        <Text style={styles.text}>{counter * 5}</Text>
        <Button title='Update State' onPress={onClickHandler}></Button>
        <Text style={styles.text}>You clicked {counter} times</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#0000ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#ffffff',
      fontSize: 20,
      fontStyle: 'italic',
      margin: 10,
    },
});