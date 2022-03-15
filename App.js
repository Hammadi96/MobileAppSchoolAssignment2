// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });




import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
} from 'react-native';
// import {Image} from 'react-native'
import { NavigationContainer,  DefaultTheme,DarkTheme, } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Authentication
import Dashboard from './Screens/Dashboard'

const Stack = createStackNavigator();



export default function App() {

    return (
      <NavigationContainer  independent={true}>
        <Stack.Navigator>

          <Stack.Screen name="Dashboard" component={Dashboard}  options={{ headerShown: false }}/>
          {/* <Stack.Screen name="Login_main" component={Login_main}  options={{ headerShown: false }}/>
          <Stack.Screen name="Login_main" component={Login_main}  options={{ headerShown: false }}/> */}

       
        </Stack.Navigator>
      </NavigationContainer>
    )
  
}
