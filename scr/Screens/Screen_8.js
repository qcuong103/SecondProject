import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

export default function Screen_7() {

    const [current, setCurrent] = useState(true)

    return (
        <View style={styles.body0}>
            <View style={styles.view10}>
                <Text style={styles.text0}>1</Text>
            </View>
            <View style={styles.view20}>
                <Text style={styles.text0}>2</Text>
            </View>
            <View style={styles.view30}>
                <Text style={styles.text0}>3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body0: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#0000ff',
      alignItems: 'stretch',
      justifyContent: 'center',
    },
    view10: {
      flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    view20: {
      flex: 1,
      backgroundColor: '#ff00ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    view30: {
      flex: 1,
      backgroundColor: '#ffff00',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text0: {
      color: '#000000',
      fontSize: 35,
      fontStyle: 'italic',
      margin: 10,
    },
    body: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'flex-start',
      },
      row: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      big_row: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        alignItems: 'stretch',
        justifyContent: 'center',
      },
      view1: {
        flex: 1,
        backgroundColor: '#00ffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      view2: {
        flex: 2,
        backgroundColor: '#ff00ff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      view3: {
        flex: 3,
        backgroundColor: '#ffff00',
        alignItems: 'center',
        justifyContent: 'center',
      },
      view4: {
        flex: 1,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center',
      },
      view5: {
        flex: 1,
        backgroundColor: '#0fff0f',
        alignItems: 'center',
        justifyContent: 'center',
      },
      view6: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      view7: {
        flex: 1,
        backgroundColor: '#0000ff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      text: {
        color: '#000000',
        fontSize: 35,
        fontStyle: 'italic',
        margin: 10,
      },
});