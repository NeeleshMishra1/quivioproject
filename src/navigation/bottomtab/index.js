
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import Images from '../../assets/image';

import Homescreen from '../../screens/homescreen';
import FA from '../../screens/2fa';
import Signin from '../../screens/signin';

const Tab = createBottomTabNavigator();

export default class Bottomtab extends Component {
  render() {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = Images.home;
                break;
              case 'ACCOUNT':
                iconName = Images.personhome;
                break;
              case 'FAVORITES':
                iconName = Images.fav;
                break;
              case 'MENU':
                iconName = Images.menu;
                break;
              default:
                iconName = Images.arrowleft; 
            }

            return (
              <Image 
                source={iconName} 
                style={{ width: size, height: size, tintColor: color }} 
              />
            );
          },
          tabBarActiveTintColor: '#46A4BA',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={FA} options={{ headerShown: false }} />
        <Tab.Screen name="ACCOUNT" component={FA} options={{ headerShown: false }} />
        <Tab.Screen name="FAVORITES" component={FA} options={{ headerShown: false }} />
        <Tab.Screen name="MENU" component={Signin} options={{ headerShown: false }} />
      </Tab.Navigator>
    );
  }
}



