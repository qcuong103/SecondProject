// /* eslint-disable prettier/prettier */
// import React, { useState, useEffect } from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     Alert,
//     TextInput,
//     FlatList,
//     Pressable,
//     Image,
// } from 'react-native';
// import CustomButton from '../utils/CustomButton_24_25_26_27_28_29_30_31_32';
// import GlobalStyle from '../utils/GlobalStyle';
// import { createStackNavigator } from '@react-navigation/stack';
// import { Provider, useSelector, useDispatch } from 'react-redux';
// import { Store } from '../redux/store_27_28_29_30_31_32';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import SQLite from 'react-native-sqlite-storage';
// import { setName, setAge, increaseAge, getCities } from '../redux/actions_27_28_29_30_31_32';

// const Stack = createStackNavigator();

// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error); }
// );


// export default function Login({ navigation }) {

//     const { name, age } = useSelector(state => state.userReducer);
//     const dispatch = useDispatch();

//     // const [name, setName] = useState('');
//     // const [age, setAge] = useState('');

//     useEffect(() => {
//         createTable();
//         getData();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     const createTable = () => {
//         db.transaction((tx) => {
//             tx.executeSql(
//                 'CREATE TABLE IF NOT EXISTS '
//                 + 'Users '
//                 + '(ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Age INTEGER);'
//             );
//         });
//     };

//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             navigation.navigate('Home');
//             //         }
//             //     })
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     'SELECT Name, Age FROM Users',
//                     [],
//                     // eslint-disable-next-line no-shadow
//                     (tx, results) => {
//                         var len = results.rows.length;
//                         if (len > 0) {
//                             navigation.navigate('Home');
//                         }
//                     }
//                 );
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const setData = async () => {
//         if (name.length === 0 || age.length === 0) {
//             Alert.alert('Warning!', 'Please write your data.');
//         } else {
//             try {
//                 dispatch(setName(name));
//                 dispatch(setAge(age));
//                 // var user = {
//                 //     Name: name,
//                 //     Age: age
//                 // }
//                 // await AsyncStorage.setItem('UserData', JSON.stringify(user));
//                 await db.transaction(async (tx) => {
//                     // await tx.executeSql(
//                     //     "INSERT INTO Users (Name, Age) VALUES ('" + name + "'," + age + ")"
//                     // );
//                     await tx.executeSql(
//                         'INSERT INTO Users (Name, Age) VALUES (?,?)',
//                         [name, age]
//                     );
//                 });
//                 navigation.navigate('Home');
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };

//     return (
//         <View style={styles.bodyA} >
//             {/* <Image
//                 style={styles.logoA}
//                 source={require('../../assets/redux.png')}
//             /> */}
//             <Text style={styles.textA}>
//                 Redux
//             </Text>
//             <TextInput
//                 style={styles.inputA}
//                 placeholder="Enter your name"
//                 onChangeText={(value) => dispatch(setName(value))}
//             />
//             <TextInput
//                 style={styles.inputA}
//                 placeholder="Enter your age"
//                 onChangeText={(value) => dispatch(setAge(value))}
//             />
//             <CustomButton
//                 title="Login"
//                 color="#1eb900"
//                 onPressFunction={setData}
//             />
//         </View>
//     );
// }

// function Home({ navigation, route }) {


//     const { name, age, cities } = useSelector(state => state.userReducer);
//     const dispatch = useDispatch();

//     // const [name, setName] = useState('');
//     // const [age, setAge] = useState('');

//     useEffect(() => {
//         getData();
//         dispatch(getCities());

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);

//     const getData = () => {
//         try {
//             // AsyncStorage.getItem('UserData')
//             //     .then(value => {
//             //         if (value != null) {
//             //             let user = JSON.parse(value);
//             //             setName(user.Name);
//             //             setAge(user.Age);
//             //         }
//             //     })
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     'SELECT Name, Age FROM Users',
//                     [],
//                     // eslint-disable-next-line no-shadow
//                     (tx, results) => {
//                         var len = results.rows.length;
//                         if (len > 0) {
//                             var userName = results.rows.item(0).Name;
//                             var userAge = results.rows.item(0).Age;
//                             dispatch(setName(userName));
//                             dispatch(setAge(userAge));
//                         }
//                     }
//                 );
//             });
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const updateData = async () => {
//         if (name.length === 0) {
//             Alert.alert('Warning!', 'Please write your data.');
//         } else {
//             try {
//                 // var user = {
//                 //     Name: name
//                 // }
//                 // await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
//                 db.transaction((tx) => {
//                     tx.executeSql(
//                         'UPDATE Users SET Name=?',
//                         [name],
//                         () => { Alert.alert('Success!', 'Your data has been updated.'); },
//                         error => { console.log(error); }
//                     );
//                 });
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//     };

//     const removeData = async () => {
//         try {
//             // await AsyncStorage.clear();
//             db.transaction((tx) => {
//                 tx.executeSql(
//                     'DELETE FROM Users',
//                     [],
//                     () => { navigation.navigate('Login'); },
//                     error => { console.log(error); }
//                 );
//             });
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
//             <FlatList
//                 data={cities}
//                 renderItem={({ item }) => (
//                     <View style={styles.itemB}>
//                         <Text style={styles.titleB}>{item.country}</Text>
//                         <Text style={styles.subtitleB}>{item.city}</Text>
//                     </View>
//                 )}
//                 keyExtractor={(item, index) => index.toString()}
//             />
//             {/* <Text style={[
//                 GlobalStyle.CustomFont,
//                 styles.textB
//             ]}>
//                 Your age is {age}
//             </Text>
//             <TextInput
//                 style={styles.inputB}
//                 placeholder='Enter your name'
//                 value={name}
//                 onChangeText={(value) => dispatch(setName(value))}
//             />
//             <CustomButton
//                 title='Update'
//                 color='#ff7f00'
//                 onPressFunction={updateData}
//             />
//             <CustomButton
//                 title='Remove'
//                 color='#f40100'
//                 onPressFunction={removeData}
//             />
//             <CustomButton
//                 title='Increase Age'
//                 color='#0080ff'
//                 onPressFunction={()=>{dispatch(increaseAge())}}
//             /> */}
//         </View>
//     );
// }

// export default function Screen_27() {
//     return (
//         <Provider store={ Store }>
//             <Stack.Navigator
//                 initialRouteName="Login"
//                 screenOptions={{
//                     headerTitleAlign: 'center',
//                     headerStyle: {
//                       backgroundColor: '#0080ff'
//                     },
//                     headerTintColor: '#ffffff',
//                     headerTitleStyle: {
//                       fontSize: 25,
//                       fontWeight: 'bold'
//                     }
//                   }}
//                 >
//                 <Stack.Screen
//                     name="Login"
//                     component={Login}
//                     options={{
//                         headerShown: false,
//                     }}
//                 />
//                 <Stack.Screen
//                     name="Home"
//                     component={Home}
//                 />
//             </Stack.Navigator>
//         </Provider>
//     );
// }

// const styles = StyleSheet.create({
//     bodyA: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: '#0080ff',
//     },
//     logoA: {
//         width: 150,
//         height: 150,
//         margin: 20,
//     },
//     textA: {
//         fontSize: 30,
//         color: '#ffffff',
//         marginBottom: 100,
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
//     bodyB: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     textB: {
//         fontSize: 40,
//         margin: 10,
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
//     itemB: {
//         backgroundColor: '#ffffff',
//         borderWidth: 2,
//         borderColor: '#cccccc',
//         borderRadius: 5,
//         margin: 7,
//         width: 350,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     titleB: {
//         fontSize: 30,
//         margin: 10,
//     },
//     subtitleB: {
//         fontSize: 20,
//         margin: 10,
//         color: '#999999',
//     },
// });
