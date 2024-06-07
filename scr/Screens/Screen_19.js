// /* eslint-disable prettier/prettier */
// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   Pressable,
// } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

// const Drawer = createDrawerNavigator();

// function ScreenA({ navigation }) {

//   const onPressHandler = () => {
//       // navigation.navigate('Screen_B');
//       navigation.toggleDrawer();
//   };

//   return (
//       <View style={styles.body}>
//           <Text style={styles.text}>
//               Screen A
//       </Text>
//           <Pressable
//               onPress={onPressHandler}
//               style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
//           >
//               <Text style={styles.text}>
//                   Toggle Drawer
//         </Text>
//           </Pressable>
//       </View>
//   );
// }

// function ScreenB({ navigation }) {

//   const onPressHandler = () => {
//       // navigation.navigate('Screen_A');
//       navigation.goBack();
//   };

//   return (
//       <View style={styles.body}>
//           <Text style={styles.text}>
//               Screen B
//       </Text>
//           <Pressable
//               onPress={onPressHandler}
//               style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
//           >
//               <Text style={styles.text}>
//                   Go Back to Screen A
//         </Text>
//           </Pressable>
//       </View>
//   );
// }

// export default function Screen_19() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         initialRouteName="Screen_A"
//         drawerPosition="left"
//         drawerType="front"
//         edgeWidth={100}
//         hideStatusBar={false}
//         overlayColor="#00000090"
//         drawerStyle={{
//           backgroundColor: '#e6e6e6',
//           width: 250,
//         }}
//         screenOptions={{
//           headerShown: true,
//           swipeEnabled: true,
//           gestureEnabled: true,
//           headerTitleAlign: 'center',
//           headerStyle: {
//             backgroundColor: '#0080ff',
//           },
//           headerTintColor: '#ffffff',
//           headerTitleStyle: {
//             fontSize: 25,
//             fontWeight: 'bold',
//           },
//         }}
//       >
//         <Drawer.Screen
//           name="Screen_A"
//           component={ScreenA}
//           options={{
//             title: 'Screen_A Title',
//             drawerIcon: ({ focused }) => (
//               <FontAwesome5
//                 name="autoprefixer"
//                 size={focused ? 25 : 20}
//                 color={focused ? '#0080ff' : '#999999'}
//               />
//             ),
//           }}
//         />
//         <Drawer.Screen
//           name="Screen_B"
//           component={ScreenB}
//           options={{
//             title: 'Screen_B Title',
//             drawerIcon: ({ focused }) => (
//               <FontAwesome5
//                 name="btc"
//                 size={focused ? 25 : 20}
//                 color={focused ? '#0080ff' : '#999999'}
//               />
//             ),
//           }}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   body: {
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//   },
//   text: {
//       fontSize: 40,
//       fontWeight: 'bold',
//       margin: 10,
//   },
// });
