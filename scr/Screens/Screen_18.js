// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Pressable,
// } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// // const Tab = createBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();


// function Screen_A({navigation}) {
//   const onPressHandler = () => {
//     navigation.navigate('Screen_B');
//   }
//     return (
//       <View style={styles.body}>
//         <Text style={styles.text}>
//             Screen A
//         </Text>
//         <Pressable
//           onPress={onPressHandler}
//           style={({ pressed }) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
//         >
//           <Text style={styles.text}>
//               Go to Screen B
//           </Text>
//         </Pressable>
//       </View>
//     );
// }
// function Screen_B({navigation}) {
//   const onPressHandler = () => {
//     // navigation.navigate('Screen_A');
//     navigation.goBack();
// }
//     return (
//     <View style={styles.body}>
//       <Text style={styles.text}>
//         Screen B
//       </Text>
//       <Pressable
//         onPress={onPressHandler}
//         style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
//         >
//         <Text style={styles.text}>
//           Go to Screen A
//         </Text>
//       </Pressable>
//     </View>
//   );
// }
// export default function Screen_18({navigation}){
//   return (
//     <Tab.Navigator
//       screenOptions={({route})=>({
//         tabBarIcon: ({ focused, size, color}) => {
//           let iconName;
//           if (route.name === 'Home') {
//             iconName = 'autoprefixer';
//             size = focused ? 25 : 20;
//             // color = focused ? '#f0f' : '#555';
//           } else if (route.name === 'Details') {
//             iconName = 'btc';
//             size = focused ? 25 : 20;
//             // color = focused ? '#f0f' : '#555';
//           }
//           return (
//             <FontAwesome5
//             name = {iconName}
//             size = {size}
//             color = {color}
//             />
//           );
//         },
//       })}
//       tabBarOptions={{
//         activeTintColor: '#f0f',
//         inactiveTintColor: '#555',
//         activeBackgroundColor: '#fff',
//         inactiveBackgroundColor: '#999',
//         showLabel: true,
//         labelStyle: {fontSize: 14},
//         showIcon: true,
//       }}
//       // for Material Bottom Tab
//       activeColor="#f0edf6"
//       inactiveColor="#3e2465"
//       barStyle={{ backgroundColor:'#694fad' }}
//     >
//       <Tab.Screen name="Screen_A" component={Screen_A} />
//       <Tab.Screen name="Screen_B" component={Screen_B} />
//     </Tab.Navigator>
//   );
// }

// const styles = StyleSheet.create({
//     body: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     },
//     text: {
//       fontSize: 40,
//       fontWeight: 'bold',
//       margin: 10,
//     },
// });

