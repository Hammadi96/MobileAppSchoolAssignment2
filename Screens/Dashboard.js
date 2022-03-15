import React, {useEffect,useState,useContext,createContext} from 'react';
import { AsyncStorage, StyleSheet, Text, View ,Modal,TouchableOpacity,Image} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Main_screen from './Main_screen'
import Profile_screen from './Profile_screen'

const Tab = createBottomTabNavigator();

export default function MyTabs({navigation}) {

  
 React.useEffect(()=>{
  const gettingthings = async()=>{
   
  }
  gettingthings()
  
  
 },[])
 
    
    return (
     
      <View style={{flex:1}}>


    <Tab.Navigator 
    screenOptions={
      
      ({ route }) => ({
        // tabBarShowLabel: false,

        "tabBarActiveTintColor": "white",
        "tabBarInactiveTintColor": "black",
        tabBarActiveBackgroundColor:'#236b99', 
        tabBarInactiveBackgroundColor:'white',
        style: {
            height:80,
        // backgroundColor: 'blue',//color you want to change
            backgroundColor: '#8e7e7e',

        },
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Main_screen') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Profile_screen') {
          iconName = focused ? 'person' : 'person';
        }
        // You can return any component that you like here!
        if (route.name === 'Main_screen') {
        return <Ionicons name={iconName} size={size} color={color} />
        }  else if (route.name === 'Profile_screen') {
          return <Ionicons name={iconName} size={size} color={color} />
        } 
        
        ;
      },
    })}
    
    // screenOptions={{
    //   showLabel: false,
    //   activeTintColor: '#9f9f9f',
    //   inactiveTintColor: '#3a3a3a',
    //   tabBarActiveBackgroundColor:'red',    //   "tabBarInactiveTintColor": "#3a3a3a",
    //   style: {
    //       height:80,
    //    // backgroundColor: 'blue',//color you want to change
    //     backgroundColor: '#8e7e7e',

    //   }
    // }}
 
    >
      <Tab.Screen name="Main_screen" component={Main_screen}  options={{ headerShown: false }} />
      <Tab.Screen name="Profile_screen" component={Profile_screen}  options={{ headerShown: false }} />

    </Tab.Navigator>
  </View>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },


});
