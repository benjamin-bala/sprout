import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './Onboarding';
import Login from './Login';
import Setup from './Setup';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="onboarding"
          options={{headerShown: false}}
          component={Onboarding}
        />
        <Stack.Screen
          name="login"
          options={{headerShown: false}}
          component={Login}
        />
        <Stack.Screen
          name="setup"
          component={Setup}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
