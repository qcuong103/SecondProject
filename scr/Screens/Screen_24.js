// /* eslint-disable prettier/prettier */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable prettier/prettier */
// import React, {useState, useEffect} from 'react';
// import {
//     Text,
//     View,
//     StyleSheet,
//     Image,
//     TextInput,
//     Alert,
// } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import CustomButton from '../utils/CustomButton_24_25_26_27_28_29_30_31_32';

// const Stack = createStackNavigator();
// import GlobalStyle from '../utils/GlobalStyle';

// function Login({navigation}) {

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         try {
//             AsyncStorage.getItem('UserData')
//                 .then(value => {
//                     if (value != null) {
//                         navigation.navigate('Home');
//                     }
//                 });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const setData = async () => {
//         if (name.length === 0 || age.length === 0) {
//             Alert.alert('Warning!', 'Please write your data.');
//         } else {
//             try {
//                 var user = {
//                     Name: name,
//                     Age: age,
//                 };
//                 await AsyncStorage.setItem('UserData', JSON.stringify(user));
//                 navigation.navigate('Home');
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };

//     return (
//         <View style={styles.bodyA}>
//             <Image
//                 style={styles.logoA}
//                 source={require('../../assets/asyncstorage.png')}
//             />
//             <Text style={styles.textA}>
//                 Async Storage
//             </Text>
//             <TextInput
//                 style={styles.inputA}
//                 placeholder="Enter your name"
//                 onChangeText={(value) => setName(value)}
//             />
//             <TextInput
//                 style={styles.inputA}
//                 placeholder="Enter your age"
//                 onChangeText={(value) => setAge(value)}
//             />
//             <CustomButton
//                 title="Login"
//                 color="#1eb900"
//                 onPressFunction={setData}
//             />
//         </View>
//     );
// }
// function Home({navigation, route}) {

//     const [name, setName] = useState('');
//     const [age, setAge] = useState('');

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         try {
//             AsyncStorage.getItem('UserData')
//                 .then(value => {
//                     if (value != null) {
//                         let user = JSON.parse(value);
//                         setName(user.Name);
//                         setAge(user.Age);
//                     }
//                 });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const updateData = async () => {
//         if (name.length === 0) {
//             Alert.alert('Warning!', 'Please write your data.');
//         } else {
//             try {
//                 var user = {
//                     Name: name,
//                 };
//                 await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
//                 Alert.alert('Success!', 'Your data has been updated.');
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };

//     const removeData = async () => {
//         try {
//             await AsyncStorage.clear();
//             navigation.navigate('Login');
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return (
//         <View style={styles.bodyB}>
//             <Text style={[
//                 GlobalStyle.CustomFont,
//                 styles.textB,
//             ]}>
//                 Welcome {name} !
//             </Text>
//             <Text style={[
//                 GlobalStyle.CustomFont,
//                 styles.textB,
//             ]}>
//                 Your age is {age}
//             </Text>
//             <TextInput
//                 style={styles.inputB}
//                 placeholder="Enter your name"
//                 value={name}
//                 onChangeText={(value) => setName(value)}
//             />
//             <CustomButton
//                 title="Update"
//                 color="#ff7f00"
//                 onPressFunction={updateData}
//             />
//             <CustomButton
//                 title="Remove"
//                 color="#f40100"
//                 onPressFunction={removeData}
//             />
//         </View>
//     );
// }
// export default function Screen_24() {
//     return (
//         <Stack.Navigator
//             initialRouteName="Login"
//             screenOptions={{
//                 headerTitleAlign: 'center',
//                 headerStyle: {
//                   backgroundColor: '#0080ff'
//                 },
//                 headerTintColor: '#ffffff',
//                 headerTitleStyle: {
//                   fontSize: 25,
//                   fontWeight: 'bold'
//                 }
//             }}
//         >
//             <Stack.Screen
//                 name="Login"
//                 component={Login}
//                 // options={{
//                 //     headerShown: false,
//                 // }}
//             />
//             <Stack.Screen
//                 name="Home"
//                 component={Home}
//                 // options={{
//                 //     headerShown: false,
//                 // }}
//             />
//         </Stack.Navigator>
//     );
// }
// const styles = StyleSheet.create({
//     bodyA: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#0080ff',
//     },
//     bodyB: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     textA: {
//         fontSize: 30,
//         color: '#ffffff',
//         marginBottom: 130,
//     },
//     textB: {
//         fontSize: 40,
//         margin: 10,
//     },
//     logoA: {
//         width: 100,
//         height: 100,
//         margin: 20,
//     },
//     inputA: {
//         width: 300,
//         borderWidth: 1,
//         borderColor: '#555',
//         borderRadius: 10,
//         backgroundColor: '#ffffff',
//         textAlign: 'center',
//         fontSize: 20,
//         marginBottom: 10,
//     },
//     inputB: {
//         width: 300,
//         borderWidth: 1,
//         borderColor: '#555',
//         borderRadius: 10,
//         backgroundColor: '#ffffff',
//         textAlign: 'center',
//         fontSize: 20,
//         marginTop: 130,
//         marginBottom: 10,
//     },
// });
