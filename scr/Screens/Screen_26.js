// /* eslint-disable prettier/prettier */
// /* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable prettier/prettier */
// import React, {useEffect} from 'react';
// import {
//     Text,
//     View,
//     StyleSheet,
//     Image,
//     TextInput,
//     Alert,
// } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import SQLite from 'react-native-sqlite-storage';

// import CustomButton from '../utils/CustomButton_24_25_26_27_28_29_30_31_32';
// import GlobalStyle from '../utils/GlobalStyle';

// import { Provider } from 'react-redux';
// import { Store } from '../redux/store_26';

// import { useSelector, useDispatch } from 'react-redux';
// import { setName, setAge, increaseAge } from '../redux/actions_26';

// const Stack = createStackNavigator();

// const db = SQLite.openDatabase(
//     {
//         name: 'MainDB',
//         location: 'default',
//     },
//     () => { },
//     error => { console.log(error);}
// );

// function Login({navigation}) {


//     const { name, age } = useSelector(state => state.userReducer);
//     const dispatch = useDispatch();

//     // const [name, setName] = useState('');
//     // const [age, setAge] = useState('');

//     useEffect(() => {
//         createTable();
//         getData();
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
//                 await db.transaction(async (tx) => {
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
//             <Image
//                 style={styles.logoA}
//                 source={require('../../assets/redux.png')}
//             />
//             <Text style={styles.textA}>
//                 Redux
//             </Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter your name"
//                 // onChangeText={(value) => setName(value)}
//                 onChangeText={(value) => dispatch(setName(value))}
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter your age"
//                 // onChangeText={(value) => setAge(value)}
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
// function Home({navigation, route}) {

//     const { name, age } = useSelector(state => state.userReducer);
//     const dispatch = useDispatch();
//     // const [name, setName] = useState('');
//     // const [age, setAge] = useState('');

//     useEffect(() => {
//         getData();
//     }, []);

//     const getData = () => {
//         try {
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
//             <Text style={[
//                 GlobalStyle.CustomFont,
//                 styles.textB,
//             ]}>
//                 Your age is {age}
//             </Text>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Enter your name"
//                 value={name}
//                 onChangeText={(value) => dispatch(setName(value))}
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
//             <CustomButton
//                 title="Increase Age"
//                 color= "#0080ff"
//                 onPressFunction={()=>{dispatch(increaseAge());}}
//             />
//         </View>
//     );
// }
// export default function Screen_26(){
//     return (
//         <Provider store={ Store }>
//             {/* <NavigationContainer> */}
//             <Stack.Navigator
//                 initialRouteName="Login"
//                 initialRouteName="Login"
//                 screenOptions={{
//                     headerTitleAlign: 'center',
//                     headerStyle: {
//                     backgroundColor: '#0080ff'
//                     },
//                     headerTintColor: '#ffffff',
//                     headerTitleStyle: {
//                     fontSize: 25,
//                     fontWeight: 'bold'
//                     }
//                 }}
//             >
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
//             {/* </NavigationContainer> */}
//         </Provider>
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
//         marginBottom: 100,
//     },
//     textB: {
//         fontSize: 40,
//         margin: 10,
//     },
//     logoA: {
//         width: 150,
//         height: 150,
//         margin: 20,
//     },
//     input: {
//         width: 300,
//         borderWidth: 1,
//         borderColor: '#555',
//         borderRadius: 10,
//         backgroundColor: '#ffffff',
//         textAlign: 'center',
//         fontSize: 20,
//         marginBottom: 10,
//     },
// });
