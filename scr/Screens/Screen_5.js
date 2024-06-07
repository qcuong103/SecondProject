import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking,
} from 'react-native';

export default function Screen_5() {
    return (
        <View style={styles.body}>
          <Text style={styles.text}>Programming with Mash</Text>
          <Button title='youtube channel' onPress={()=>{Linking.openURL('https://youtube.com/programmingwithmash')}}></Button>
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
      fontStyle:'italic',
      margin: 10,
    },
});
