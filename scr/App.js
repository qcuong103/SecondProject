import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  RefreshControl,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Alert,
  ToastAndroid,
  Modal,
  Image,
  ImageBackground,
  SafeAreaView,
} from 'react-native';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Provider as PaperProvider, DarkTheme as PaperDarkTheme } from 'react-native-paper';

import Screen_5 from './Screens/Screen_5';
import Screen_6 from './Screens/Screen_6';
import Screen_7 from './Screens/Screen_7';
import Screen_8 from './Screens/Screen_8';
import Screen_9 from './Screens/Screen_9';
import Screen_10 from './Screens/Screen_10';
import Screen_11 from './Screens/Screen_11';
import Screen_12 from './Screens/Screen_12';
import Screen_13 from './Screens/Screen_13';
import Screen_14 from './Screens/Screen_14';
import Screen_15 from './Screens/Screen_15';
import Screen_16 from './Screens/Screen_16';
import Screen_17 from './Screens/Screen_17';
// import Screen_17_B from './Screens/Screen_17_B';
// import Screen_18 from './Screens/Screen_18';
// import Screen_19 from './Screens/Screen_19';
// import Screen_20 from './Screens/Screen_20';
// import Screen_23 from './Screens/Screen_23';
// import Screen_24 from './Screens/Screen_24';
// import Screen_25 from './Screens/Screen_25';
// import Screen_26 from './Screens/Screen_26';
// import Screen_27 from './Screens/Screen_27';
// import Screen_28 from './Screens/Screen_28';
// import Screen_29 from './Screens/Screen_29';
// import Screen_30 from './Screens/Screen_30';
// import Screen_31 from './Screens/Screen_31';
// import Screen_33 from './Screens/Screen_33';
// import Screen_101 from './Screens/Screen_101';
// import Screen_102 from './Screens/Screen_102';
// import Screen_103 from './Screens/Screen_103';
// import Screen_104 from './Screens/Screen_104';
// import Screen_105 from './Screens/Screen_105';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

function Screen_Main({navigation}){

  const [Clip] = useState([
    {key: 5, value: '#5 - Structure & Basic Components in Our First App'},
    {key: 6, value: '#6 - Using the State Hook'},
    {key: 7, value: '#7 - Styles & Style Sheet'},
    {key: 8, value: '#8 - Responsive UI with Flexbox'},
    {key: 9, value: '#9 - List, ScrollView & RefreshControl'},
    {key: 10, value: '#10 - FlatList & SectionList with Nested Array'},
    {key: 11, value: '#11 - Text Input & Keyboard'},
    {key: 12, value: '#12 - Button, Touchables & Pressable'},
    {key: 13, value: '#13 - Alert & Toast Message'},
    {key: 14, value: '#14 - Modal & How to Create Custom Alert with it'},
    {key: 15, value: '#15 - Image & ImageBackground'},
    {key: 16, value: '#16 - Custom Components & Props'},
    {key: 17, value: '#17 - React Navigation V5 - Stack Navigator'},
    {key: 18, value: '#18 - React Navigation V5 - Tab Navigator - Material Tab at Bottom &Top'},
    {key: 19, value: '#19 - React Navigation V5 - Drawer Navigation - Side Menu'},
    {key: 20, value: '#20 - React Navigation V5 - Passing Data Between Screens'},
    {key: 21, value: '#21 - Debugging in VS Code'},
    {key: 22, value: '#22 - Custom Fonts in React Native CLI & Expo Projects'},
    {key: 23, value: '#23 - Global Styles & How to Use Custom Fonts Globally in Project'},
    {key: 24, value: '#24 - AsyncStorage - How to make an Offline Login with Async Storage'},
    {key: 25, value: '#25 - SQLite Database - How to make an Offline Login with SQLite'},
    {key: 26, value: '#26 - Redux - State Management'},
    {key: 27, value: '#27 - How to Fetch Data from an API Using Redux'},
    {key: 28, value: '#28 - Local & Scheduled Push Notification'},
    {key: 29, value: '#29 - Push Notification with Firebase - Remote Notification'},
    {key: 30, value: '#30 - Google Maps'},
    {key: 31, value: '#31 - RN Camera with Hooks'},
    {key: 33, value: '#33 - To-Do List App part 1'},
    {key: 101, value: 'Quiz#1 - Challenge Yourself'},
    {key: 102, value: 'Custom Drawer Navigator'},
    {key: 103, value: 'FlatList animations at 60fps with Animated API'},
    {key: 104, value: 'Custom Bottom Tab Navigator'},
    {key: 105, value: 'File Manager App UI - Animated UI'},
  ]);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        React Native Tutorial
      </Text>
        <FlatList
          data={Clip}
          keyExtractor={(item) => item.key.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => (navigation.navigate(`Screen_${item.key}`))}>
              <View style={styles.item1}>
                <Text style={styles.text1}>{item.value}</Text>
              </View>
            </TouchableOpacity>
          )}

        />
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
      }}
      >
        <Stack.Screen name="Screen_Main" component={Screen_Main} options={{title: 'Screen Main' }}/>
        <Stack.Screen name="Screen_5" component={Screen_5} options={{title: 'Screen 5' }}/>
        <Stack.Screen name="Screen_6" component={Screen_6} options={{title: 'Screen 6' }}/>
        <Stack.Screen name="Screen_7" component={Screen_7} options={{title: 'Screen 7' }}/>
        <Stack.Screen name="Screen_8" component={Screen_8} options={{title: 'Screen 8' }}/>
        <Stack.Screen name="Screen_9" component={Screen_9} options={{title: 'Screen 9' }}/>
        <Stack.Screen name="Screen_10" component={Screen_10} options={{title: 'Screen 10' }}/>
        {/* <Stack.Screen name="Screen_101" component={Screen_101} options={{title: 'Screen 101' }}/> */}
        <Stack.Screen name="Screen_11" component={Screen_11} options={{title: 'Screen 11' }}/>
        <Stack.Screen name="Screen_12" component={Screen_12} options={{title: 'Screen 12' }}/>
        <Stack.Screen name="Screen_13" component={Screen_13} options={{title: 'Screen 13' }}/>
        <Stack.Screen name="Screen_14" component={Screen_14} options={{title: 'Screen 14' }}/>
        <Stack.Screen name="Screen_15" component={Screen_15} options={{title: 'Screen 15' }}/>
        <Stack.Screen name="Screen_16" component={Screen_16} options={{title: 'Screen 16' }}/>
        <Stack.Screen name="Screen_17" component={Screen_17} options={{title: 'Screen 17' }}/>
        {/* <Stack.Screen name="Screen_17_B" component={Screen_17_B} options={{title: 'Screen 17 B' }}/> */}
        {/* <Stack.Screen name="Screen_18" component={Screen_18} options={{title: 'Screen 18' }}/>
        <Stack.Screen name="Screen_19" component={Screen_19} options={{title: 'Screen 19' }}/>
        <Stack.Screen name="Screen_20" component={Screen_20} options={{title: 'Screen 20' }}/>
        <Stack.Screen name="Screen_23" component={Screen_23} options={{title: 'Screen 23' }}/>
        <Stack.Screen name="Screen_24" component={Screen_24} options={{title: 'Screen 24' }}/>
        <Stack.Screen name="Screen_25" component={Screen_25} options={{title: 'Screen 25' }}/>
        <Stack.Screen name="Screen_26" component={Screen_26} options={{title: 'Screen 26' }}/>
        <Stack.Screen name="Screen_27" component={Screen_27} options={{title: 'Screen 27' }}/>
        <Stack.Screen name="Screen_28" component={Screen_28} options={{title: 'Screen 28' }}/>
        <Stack.Screen name="Screen_29" component={Screen_29} options={{title: 'Screen 29' }}/>
        <Stack.Screen name="Screen_30" component={Screen_30} options={{title: 'Screen 30' }}/>
        <Stack.Screen name="Screen_31" component={Screen_31} options={{title: 'Screen 31' }}/> */}
        {/* <Stack.Screen name="Screen_33" component={Screen_33} options={{title: 'Screen 33' }}/>
        <Stack.Screen name="Screen_102" component={Screen_102} options={{headerShown: false}}/>
        <Stack.Screen name="Screen_103" component={Screen_103} options={{headerShown: false}}/>
        <Stack.Screen name="Screen_104" component={Screen_104} options={{headerShown: false}}/>
        <Stack.Screen name="Screen_105" component={Screen_105} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    alignItems: 'stretch',
    // height: 1440,
  },

  body9: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  item1: {
    backgroundColor: '#00ff00',
    // minHeight: 70,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 5,
    borderRadius: 10,
  },
  text1: {
    color: '#000000',
    fontSize: 15,
    // fontWeight: 'bold',
    textAlign: 'center',
    margin: 5,
    height: 20,
  },
});

export default App;
