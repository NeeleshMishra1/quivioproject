import React, { Component } from 'react';
import Splace from '../screens/splacescrren';
import Tutorial from '../screens/tutorial';
import Signin from '../screens/signin';
import ForgetPassword from '../screens/forgotPassword';
import ResetPassword from '../screens/reset';
import FA from '../screens/2fa';
import Addnumber from '../screens/2fa/addnumber';
import Otppage from '../screens/2fa/otp';
import {NavigationContainer} from '@react-navigation/native';
import Homescreen from '../screens/homescreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottomtab from './bottomtab';

const Stack = createNativeStackNavigator();

export default class Rootnavigation extends Component {
  render() {
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName='splace'>
            
            <Stack.Screen
            name='splace'
            component={Splace}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='tutorial'
            component={Tutorial}
            options={{headerShown:false}}
            />
             <Stack.Screen
            name='signin'
            component={Signin}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='forgetpassword'
            component={ForgetPassword}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='Resetpassword'
            component={ResetPassword}
            options={{headerShown:false}}
            />
              {/* <Stack.Screen
            name='2fa'
            component={FA}
            options={{headerShown:false}}
            /> */}
             <Stack.Screen
            name='addphone'
            component={Addnumber}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='otp'
            component={Otppage}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name='bottom'
            component={Bottomtab}
            options={{headerShown:false}}
            />
             </Stack.Navigator>
             </NavigationContainer>
      // // <Signin/>
      //   <Bottomtab/>
    );
  }
}


