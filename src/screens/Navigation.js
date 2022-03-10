import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Onboarding from './Onboarding';
import Login from './Login';
import Setup from './Setup';
import {Authentication} from '../UserAuth';

export default function Navigation() {
  const Stack = createNativeStackNavigator();
  const {user} = useContext(Authentication);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name="setup"
            component={Setup}
            options={{headerShown: false}}
          />
        ) : (
          <>
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
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
