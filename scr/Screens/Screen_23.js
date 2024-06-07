// /* eslint-disable prettier/prettier */
// import React,{useState} from 'react';
// import {
//     StyleSheet,
//     View,
//     Text,
//     Pressable,
// } from 'react-native';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import GlobalStyle from '../utils/GlobalStyle';

// const Drawer = createDrawerNavigator();

// function ScreenA({navigation, route}){

//     const Users = [
//         {
//             id: 1,
//             name: 'User A',
//         },
//         {
//             id: 2,
//             name: 'User B',
//         },
//         {
//             id: 3,
//             name: 'User C',
//         },
//     ];
//     const [name, setName] = useState('');
//     const onPressHandler = () => {
//         // navigation.navigate('Screen_B');
//         // navigation.toggleDrawer();
//         for (let user of Users) {
//             setName(user.name);
//         }
//     }
//     return (
//         <View style={styles.body}>
//             <Text style={[
//                 GlobalStyle.CustomFont,
//                 styles.text,
//             ]}>
//                 Screen A
//             </Text>
//             <Pressable
//                 onPress={onPressHandler}
//                 style={({pressed})=>({
//                     backgroundColor:pressed ? '#ddd' : '#0f0',
//                 })}
//             >
//                 <Text style={GlobalStyle.ButtonText}>Get the last user</Text>
//             </Pressable>
//             <Text style={styles.text}>{name}</Text>
//         </View>
//     );
// }
// function ScreenB({navigation, route}){
//     const {ItemName, ItemId} = route.params;
//     const onPressHandler = () => {
//         navigation.navigate('Screen_A', { Message: 'message from B' });
//         // navigation.goBack();
//         // navigation.setParams({ ItemId: 14 });
//     }

//     return (
//         <View style={styles.body}>
//             <Text style={[
//                 GlobalStyle.CustomFont,
//                 styles.text,
//             ]}>
//                 Screen B
//             </Text>
//             <Pressable
//                 onPress={onPressA}
//                 style={({pressed})=>({backgroundColor:pressed ? '#ddd' : '#0f0'})}
//             >
//                 <Text style={GlobalStyle.ButtonText}>Go Back to Screen A</Text>
//             </Pressable>
//             <Text style={styles.text}>{ItemName}</Text>
//             <Text style={styles.text}>ID: {ItemId}</Text>
//         </View>
//     );
// }

// export default function Screen_23({navigation}){
//     return (
//         <Drawer.Navigator
//         initialRouteName="Screen_A"
//         drawerPosition="left"
//         drawerType="font"
//         edgeWidth={100}
//         hideStatusBar={false}
//         overlayColor="#00000090"
//         // eslint-disable-next-line react-native/no-inline-styles
//         drawerStyle={{
//             backgroundColor: '#e6e6e6',
//             width:250,
//         }}
//         screenOptions={{
//             headerShown: true,
//             swipeEnabled: true,
//             gestureEnabled: true,
//             headerTitleAlign: 'center',
//             headerStyle:{
//                 backgroundColor:'#0080ff',
//             },
//             headerTintColor:'#ffffff',
//             headerTitleStyle: {
//                 fontSize: 25,
//                 fontWeight: 'bold',
//             },
//         }}
//         >

//             <Drawer.Screen
//                 name="Screen_A"
//                 component={ScreenA}
//                 options={{
//                     title: 'Screen_A Title',
//                     drawerIcon: ({focused}) => (
//                         <FontAwesome5
//                             name = "autoprefixer"
//                             size={focused ? 25 : 20}
//                             color={focused ? '#0080ff' : '#999999'}
//                         />
//                     ),
//                 }}
//                 // initialParams={{ItemName: 'Item from Drawer', ItemId: 12}}
//             />
//             <Drawer.Screen
//                 name="Screen_B"
//                 component={ScreenB}
//                 options={{
//                     title: 'Screen_B Title',
//                     drawerIcon: ({focused}) => (
//                         <FontAwesome5
//                             name = "btc"
//                             size={focused ? 25 : 20}
//                             color={focused ? '#0080ff' : '#999999'}
//                         />
//                     ),
//                 }}
//                 initialParams={{ItemName: 'Item from Drawer', ItemId: 13}}
//             />
//         </Drawer.Navigator>
//     );
// }
// const styles = StyleSheet.create({
//     body: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 40,
//         margin: 10,
//     },
// });
